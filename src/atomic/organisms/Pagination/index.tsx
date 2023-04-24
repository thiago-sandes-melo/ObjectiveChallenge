import React, { Dispatch } from 'react';

import {
  Content,
  Arrow,
} from './styles';

import { Character } from '../../../models/Characters';

import PageCounter from '../../molecules/PageCounter'

type PaginationProps = {
  currentPage: number;
  setCurrentPage: Dispatch<number>;
  searchData: Array<Character[]>;
  data: Array<Character[]>;
  searchName: string;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage , setCurrentPage, searchData, data, searchName}: PaginationProps) => {

  const changePageIndex = (incrementNumber: number): void => {
      const pageIndex = currentPage + incrementNumber;
      const indexValidation = !!searchName.trim() ? !!searchData[pageIndex] : !!data[pageIndex];

      if (indexValidation) setCurrentPage(currentPage + incrementNumber);
  }

  return (
    <Content>
      <Arrow active={currentPage != 0} onPress={() => changePageIndex(-1)} rotation={-90}/>

      {!!searchName.trim() ? searchData.map((_, pageIndex) =>
        <PageCounter currentPage={currentPage} currentPageIteratorIndex={pageIndex} setCurrentPage={setCurrentPage} data={searchData} key={pageIndex}/>
      ) : data.map((_, pageIndex) =>
        <PageCounter currentPage={currentPage} currentPageIteratorIndex={pageIndex} setCurrentPage={setCurrentPage} data={data} key={pageIndex}/>
      )}

      <Arrow active={!!searchName.trim() ? !!searchData[currentPage + 1] : !!data[currentPage + 1]} onPress={() => changePageIndex(+1)} rotation={90}/>
    </Content>
  );
};
export default Pagination;
