import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
// reducers
import tablesReducer from './tablesRedux';

const subreducers = {
  tables: tablesReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
