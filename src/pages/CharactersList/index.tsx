import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import apiKey from '../../config/api-key';
import api from '../../services/api';
import {
  Content,
  Header,
  HeaderText,
  HeaderBolderText,
  ItemSeparator,
  FlatListHeader,
  FlatListHeaderTitle,
  FlatListFooter,
} from './styles';
import { useTheme } from '../../hooks/Theme';
import { Character } from '../../models/Characters';

import Pagination from '../../atomic/organisms/Pagination';
import Searcher from '../../atomic/atoms/Searcher';
import AvatarElement from '../../atomic/molecules/AvatarElement';

const CharactersList: React.FC = () => {
  const navigator = useNavigation();

  const [characters, setCharacters] = useState<Array<Character[]>>([]);
  const [searchName, setSearchName] = useState<string>('');
  const [searchCharacters, setSearchCharacters] = useState<Array<Character[]>>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const { colors } = useTheme();

  const charactersToPagination = (characters: Character[], numberOfCharacters: number): Array<Character[]> => {
    const paginatedCharacters: Array<Character[]> = [];

    while (characters.length > 0) {
      const chunk = characters.splice(0, numberOfCharacters);
      paginatedCharacters.push(chunk);
    }

    return paginatedCharacters;
  }

  const loadNextCharacters = useCallback(() => {
    setLoading(true);

    api
      .get('/v1/public/characters', {
        params: {
          ...apiKey,
        },
      })
      .then((response) => {
        const handledData= [...characters, ...response.data.data.results];

        handledData.length == 0 && setCurrentPage(0);

        setCharacters(charactersToPagination(handledData, 4));
      })
      .catch(() => {
        Alert.alert('Erro ao carregar os herois da nossa base de dados');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [characters]);

  const loadSearchCharacters = useCallback(() => {
    if (searchName.trim()) {
      setLoading(true);

      api
        .get('/v1/public/characters', {
          params: {
            ...apiKey,
            nameStartsWith: searchName,
          },
        })
        .then((response) => {
          const handledData= [...response.data.data.results];

          handledData.length == 0 && setCurrentPage(0);

          setSearchCharacters(charactersToPagination([...response.data.data.results], 4));
        })
        .catch(() => {
          Alert.alert('Erro na busca de herois da nossa base de dados');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchName, setLoading]);

  useEffect(() => {
    loadSearchCharacters();
  }, [searchName]);

  useEffect(() => {
    AsyncStorage.getItem('@MarvelApp:characters').then((charactersJson) => {
      if (charactersJson === null) {
        loadNextCharacters();
        return;
      }

      setCharacters(JSON.parse(charactersJson));
    });
  }, []);

  useEffect(() => {
    const storageCharacters = AsyncStorage.setItem(
      '@MarvelApp:characters',
      JSON.stringify(characters),
    );

    Promise.resolve(storageCharacters);
  }, [characters]);

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            navigator.navigate('CharacterBio', { character: item });
          }}
        >
          <AvatarElement item={item}/>
        </TouchableOpacity>
      );
    },
    [colors, navigator],
  );

  const renderSeparator = useCallback(() => {
    return <ItemSeparator/>;
  }, []);

  const renderLoadingFooter = useCallback(() => {
    if (!loading) {
      return <View/>;
    }

    return (
      <ActivityIndicator
        color={colors.text}
        style={{ marginBottom: 20, marginTop: 20 }}
      />
    );
  }, [loading]);

  return (
    <Content>
      <Header>
        <HeaderBolderText>BUSCA MARVEL</HeaderBolderText>
        <HeaderText>TESTE FRONT-END</HeaderText>
      </Header>

      <Searcher title={'Nome do Personagem'} value={searchName} onChangeText={setSearchName} colors={colors}/>

      <FlatListHeader>
        <FlatListHeaderTitle>Nome</FlatListHeaderTitle>
      </FlatListHeader>

      <FlatList<Character>
        style={{ flex: 1 }}
        data={!!searchName.trim() ? searchCharacters[currentPage] : characters[currentPage]}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.toString()}
        ListFooterComponent={renderLoadingFooter}
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchData={searchCharacters}
        data={characters}
        searchName={searchName}
      />

      <FlatListFooter/>
    </Content>
  );
};
export default CharactersList;
