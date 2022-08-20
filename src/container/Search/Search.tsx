import * as React from 'react';
import SearchView from '../../views/SearchView';
import { useAppContext } from '../../context/app';

export default function Search() {
  const { setSearch } = useAppContext();
  
  const searchChange = (keyword: string) => {
    setSearch(keyword);
  }
  return (
    <SearchView actionSearchChange={searchChange} />
  );
}
