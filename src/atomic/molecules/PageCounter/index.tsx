import React, { Dispatch } from 'react';

import {
  Container,
  Number,
} from './styles';

import { Character } from '../../../models/Characters';

type PageCounterProps = {
  currentPage: number;
  currentPageIteratorIndex: number;
  setCurrentPage: Dispatch<number>;
  data: Array<Character[]>;
};

const PageCounter: React.FC<PageCounterProps> = ({ currentPage , currentPageIteratorIndex, setCurrentPage, data }: PageCounterProps) => {
  const currentPageNumber = currentPageIteratorIndex + 1;
  const activePage = currentPage == currentPageIteratorIndex;
  const hasNeighborsPages = Math.abs(currentPageIteratorIndex - currentPage) <= 1;
  const onExtremity = ((currentPage == 0) || (currentPage == data.length - 1)) && Math.abs(currentPageIteratorIndex - currentPage) <= 2;

  if(hasNeighborsPages || onExtremity) {
    return (
      <Container active={activePage} onPress={() => setCurrentPage(currentPageIteratorIndex)}>
        <Number active={activePage}> {currentPageNumber.toString()} </Number>
      </Container>
    );
  } else {
    return null;
  }
};

export default PageCounter;
