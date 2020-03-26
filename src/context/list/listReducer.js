import {
  GET_LISTS,
  ADD_LIST,
  UPDATE_LIST,
  DELETE_LIST,
  SET_CURRENT_LIST,
  CLEAR_CURRENT_LIST,
  LIST_ERROR,
  SET_LIST_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        lists: action.payload,
        listLoading: false
      };
    case ADD_LIST:
      return {
        ...state,
        lists: [action.payload, ...state.lists],
        listLoading: false
      };
    case UPDATE_LIST:
      return {
        ...state,
        lists: state.lists.map(list =>
          list.id === action.payload.id ? action.payload : list
        ),
        listLoading: false
      };
    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.payload),
        listLoading: false
      };
    case SET_CURRENT_LIST:
      return {
        ...state,
        currentList: action.payLoad
      };
    case CLEAR_CURRENT_LIST:
      return {
        ...state,
        currentList: null
      };
    case SET_LIST_LOADING:
      return {
        ...state,
        listLoading: true
      };
    case LIST_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
