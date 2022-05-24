import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { strContains } from '../utils/strContains';

import initialState from './initialState';

import listsReducer from './listsRedux';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => {
  return (
    cards.filter((card) => card.columnId === columnId &&
    strContains(card.title, searchString))
  );
};

export const getCardsFavorite = (state) => {
  return (
    state.cards.filter(card => card.isFavorite === true)
  );
};


export const getAllColumns = (state) => {
  return (
    state.columns
  );
};

export const getListById = ({ lists }, listId) => {
  return (
    lists.find(list => list.id === listId)
  );
};

export const getColumnsByList = ({ columns }, listId) => {
  return (
    columns.filter((column) => column.listId === listId)
  );
};

export const getAllLists = (state) => {
  return (
    state.lists
  );
};

// action creators
export const addColumn = (payload) => {
  return (
    { type: 'ADD_COLUMN', payload }
  );
};

export const addCard = (payload) => {
  return (
    { type: 'ADD_CARD', payload }
  );
};

export const updateSearchString = (payload) => {
  return ( 
    { type: 'UPDATE_SEARCHSTRING', payload }
  );
};

export const addList = (payload) => {
  return (
    { type: 'ADD_LIST', payload }
  );
};

export const toggleCartFavorite = (payload) => {
  return (
    {type: 'TOGGLE_CARD_FAVORITE', payload }
  );
};

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;