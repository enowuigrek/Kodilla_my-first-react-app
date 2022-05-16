import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => {
  return (
    cards.filter((card) => card.columnId === columnId &&
    strContains(card.title, searchString))
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

const reducer = (state, action) => {

  switch(action.type) {

    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [
          ...state.columns,
          {
            ...action.payload,
            id: shortid()
          }
        ]
      };

    case 'ADD_CARD':
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            ...action.payload,
            id: shortid()
          }
        ]
      };

    case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString:
        action.payload
      };
      
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;