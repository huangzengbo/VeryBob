import * as React from 'react';
import SortView from '../../views/SortView';
import { sorts } from '../../constant/sort';
import { useAppContext } from '../../context/app';
import { iSort } from '../../types/sort';

export default function Users() {
  const { setSort, state } = useAppContext();
  const changeSort = (sort: iSort) => {
    setSort(sort);
  }
  return (
    <SortView allSorts={sorts} actionChangeSort={changeSort} sort={state.sort} />
  );
}
