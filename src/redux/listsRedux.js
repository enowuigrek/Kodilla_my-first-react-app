import shortid from 'shortid';

// selectors
export const getListById = ({ lists }, listId) => {
  return (
    lists.find(list => list.id === listId)
  );
};

export const getAllLists = (state) => {
  return (
    state.lists
  );
};

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const addList = (payload) => {
  return (
    { type: ADD_LIST, payload }
  )
};

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...statePart,
        { ...action.payload, id: shortid() }
      ];
    default:
      return statePart;
  };
};

export default listsReducer;