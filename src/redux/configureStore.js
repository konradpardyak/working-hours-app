import { combineReducers, createStore } from 'redux';
import logsReducer from './logsReducer';
import { loadState, saveState } from './localStorage';

const reducer = combineReducers({
  logs: logsReducer
});

const persistedState = loadState();

const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
})

export default store;
