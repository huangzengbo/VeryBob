import React from 'react';
import ReactDOM from 'react-dom';
import ScenariosView from './ScenariosView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScenariosView scenarios={[]} actionScenarioAdd={()=>{}}/>, div);
});