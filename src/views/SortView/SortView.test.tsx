import React from 'react';
import ReactDOM from 'react-dom';
import SortView from './SortView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const sorts = ['name']
  ReactDOM.render(<SortView allSorts={sorts} actionChangeSort={()=>{}} sort={{sortBy: 'name', isAesc: true}} />, div);
});