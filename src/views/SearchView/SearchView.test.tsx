import React from 'react';
import ReactDOM from 'react-dom';
import SearchView from './SearchView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchView actionSearchChange={()=>{}} />, div);
});