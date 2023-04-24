import React, { useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SharedElement } from 'react-navigation-shared-element';
import { useTheme } from '../../hooks/Theme';
import { Container, HeroDescription, HeroImage } from './styles';
import { Character } from '../../models/Characters';
import Icon from 'react-native-vector-icons/Feather';

type RootStackParamList = {
  Home: undefined;
  Profile: {
    character: Character;
    screen: React.FC;
  };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

type NavigationHeaderProps = {
  tintColor?: string | undefined;
};

const CharacterBio: React.FC<Props> = ({ route, navigation }: Props) => {
  const { character } = route.params;
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: character.name,
      headerTintColor: '#D42026',
      headerTitleAlign: 'center',
      headerLeft: ({ tintColor }: NavigationHeaderProps) => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            size={20}
            color={tintColor}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const imageUri = useMemo(() => {
    const { path, extension } = character.thumbnail;

    return `${path}.${extension}`;
  }, []);

  return (
    <Container>
      <SharedElement id={`item.${character.id}.photo`}>
        <HeroImage source={{ uri: imageUri }}/>
      </SharedElement>
      <HeroDescription style={{ color: colors.text }}>
        {character.description || 'Não temos mais informações sobre esse personagem na nossa base de dados'}
      </HeroDescription>
    </Container>
  );
};

export default CharacterBio;
