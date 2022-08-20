import * as React from 'react';
import ScenariosView from '../../views/ScenariosView';
import { useAppContext } from '../../context/app';
import { applySortSearch } from './Scenarios.adaptor';

export default function Scenarios() {
  const { state, addScenario, setSearch } = useAppContext();

  const addScenarioName = (name: string) => {
    const addItem = {
        id: state.scenarios.length + 1,
        name,
        created: (new Date()).toString(),
        status: 'incomplete'
    }
    addScenario(addItem);
    setSearch('');
  }

  return (
    <>
        <ScenariosView scenarios={applySortSearch(state.scenarios, state.sort, state.search)} actionScenarioAdd={addScenarioName} />
    </>
  );
}
