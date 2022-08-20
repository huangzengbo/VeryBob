import React, {useReducer} from 'react';

import { iScenario } from '../types/scenario';
import { iSort } from '../types/sort';
import createCtx from '../utils/createCtx';
import { scenarios } from '../constant/scenarios';

interface Context {
  state: State;
  setScenarios: (scenarios: iScenario[]) => void;
  addScenario: (scenario: iScenario) => void;
  setSort: (sort: iSort) => void;
  setSearch: (keyword: string) => void;
}

const [useCtx, Provider] = createCtx<Context>();

export enum ActionType {
  SetScenarios = 'set-scenarios',
  AddScenario = 'add-scenario',
  SetSort = 'set-sort',
  SetSearch = 'set-search'
}

export interface State {
  scenarios: iScenario[];
  search: string;
  sort: iSort;
}

const initialState: State = {
  scenarios: scenarios,
  search: '',
  sort: {
    sortBy: 'name',
    isAesc: true,
  }
};

interface SetScenariosAction {
  type: ActionType.SetScenarios;
  payload: iScenario[];
}

interface AddScenarioAction {
  type: ActionType.AddScenario;
  payload: iScenario;
}

interface SetSortAction {
  type: ActionType.SetSort;
  payload: iSort;
}

interface SetSearchAction {
  type: ActionType.SetSearch;
  payload: string;
}


type Action = SetScenariosAction | AddScenarioAction | SetSortAction| SetSearchAction;

interface Props {
  children?: React.ReactElement;
}

type Reducer = (state: State, action: Action) => State;

const setScenarios =
  (dispatch: React.Dispatch<SetScenariosAction>) =>
  (scenarios: iScenario[]): void => {
    dispatch({
      type: ActionType.SetScenarios,
      payload: scenarios,
    });
  };

const addScenario =
  (dispatch: React.Dispatch<AddScenarioAction>) =>
  (scenario: iScenario): void => {
    dispatch({
      type: ActionType.AddScenario,
      payload: scenario,
    });
  };

const setSort =
  (dispatch: React.Dispatch<SetSortAction>) =>
  (sort: iSort): void => {
    dispatch({
      type: ActionType.SetSort,
      payload: sort,
    });
  };

const setSearch =
  (dispatch: React.Dispatch<SetSearchAction>) =>
  (keyword: string): void => {
    dispatch({
      type: ActionType.SetSearch,
      payload: keyword,
    });
  };

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set-scenarios':
      return {...state, scenarios: action.payload};
    case 'add-scenario':
      return {...state, scenarios: state.scenarios.concat(action.payload)};
    case 'set-sort':
      return {...state, sort: action.payload};
    case 'set-search':
      return {...state, search: action.payload};
    default:
      return state;
  }
};

function AppProvider(props: Props): React.ReactElement {
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);

  const actions = {
    setScenarios: setScenarios(dispatch),
    addScenario: addScenario(dispatch),
    setSort: setSort(dispatch),
    setSearch: setSearch(dispatch),
  };

  return <Provider value={{state, ...actions}}>{props.children}</Provider>;
}

export {useCtx as useAppContext, AppProvider};
