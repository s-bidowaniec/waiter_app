// selectors
export const getAllTables = ({ tables }) => tables;

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return statePart.map((table) => {
        table.id === action.payload.id ? action.payload : table;
      });
    default:
      return statePart;
  }
};

export default tablesReducer;
