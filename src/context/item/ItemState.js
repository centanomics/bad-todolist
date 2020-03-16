import React, { useReducer } from 'react';
import axios from 'axios';
import itemContext from './itemContext';
import itemReducer from './itemReducer';

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

const ItemState = props => {
  const initialState = {
    items: null,
    currentItem: null,
    error: null,
    itemLoading: true
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  // Set Loading for Items

  const setItemLoading = () => {
    dispatch({
      type: SET_ITEM_LOADING
    });
  };

  // Get Items

  const getItems = async id => {
    try {
      setItemLoading();
      const res = await axios.get(`/items?listId=${id}`);
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ITEM_ERROR,
        payload: err.response.message
      });
    }
  };

  // Add Item

  const addItem = async item => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/items', item, config);
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ITEM_ERROR,
        payload: err.response.message
      });
    }
  };

  // Update Item

  const updateItem = async item => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(`/lists/${item.id}`, list, config);
      dispatch({
        type: UPDATE_ITEM,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ITEM_ERROR,
        payload: err.response.message
      });
    }
  };

  // Delete Item

  const deleteItem = async id => {
    try {
      await axios.delete(`/lists/${id}`);
      dispatch({
        type: DELETE_ITEM,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: ITEM_ERROR,
        payload: err.response.message
      });
    }
  };

  // Set current item

  const setCurrentItem = async item => {
    dispatch({
      type: SET_CURRENT_ITEM,
      payload: item
    });
  };

  // clear current item

  const clearCurrentItem = async () => {
    dispatch({
      type: CLEAR_CURRENT_ITEM
    });
  };

  return (
    <itemContext.Provider
      value={{
        items: state.items,
        currentItem: state.currentItem,
        error: state.error,
        itemLoading: state.itemLoading,
        getItems,
        addItem,
        updateItem,
        deleteItem,
        setCurrentItem,
        clearCurrentItem
      }}
    >
      {props.children}
    </itemContext.Provider>
  );
};

export default ItemState;
