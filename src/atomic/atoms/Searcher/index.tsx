import React, { Dispatch } from 'react';

import {
  Container,
  SearcherInputTitle,
  SearcherInputContainer,
  SearcherInput,
} from './styles';

import { Colors } from '../../../hooks/Theme';

type SearcherProps = {
  title: string;
  value: string;
  onChangeText: Dispatch<string>;
  colors: Colors;
};

const Searcher: React.FC<SearcherProps> = ({ title , value, onChangeText, colors }: SearcherProps) => {
  return (
      <Container>
        <SearcherInputTitle>{title}</SearcherInputTitle>
        <SearcherInputContainer>
            <SearcherInput
              onChangeText={(name: string) => onChangeText(name)}
              value={value}
              style={{ color: colors.text }}
            />
        </SearcherInputContainer>
      </Container>
  );
};

export default Searcher;
