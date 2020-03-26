import {
  GET_ITEMS,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  SET_CURRENT_ITEM,
  CLEAR_CURRENT_ITEM,
  ITEM_ERROR,
  SET_ITEM_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        itemLoading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
        itemLoading: false
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
        itemLoading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        itemLoading: false
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      };
    case CLEAR_CURRENT_ITEM:
      return {
        ...state,
        currentItem: null
      };
    case SET_ITEM_LOADING:
      return {
        ...state,
        itemLoading: true
      };
    case ITEM_ERROR:
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
