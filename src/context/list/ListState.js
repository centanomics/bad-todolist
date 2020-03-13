import React, { useReducer } from 'react';
import axios from 'axios';
import listContext from './listContext';
import listReducer from './listReducer';

import {
  GET_LISTS,
  ADD_LIST,
  UPDATE_LIST,
  DELETE_LIST,
  SET_CURRENT_LIST,
  CLEAR_CURRENT_LIST,
  LIST_ERROR
} from '../types';

const ListState = props => {
  const initialState = {
    lists: null,
    currentList: null,
    error: null,
    listLoading: true
  };

  const [state, dispatch] = useReducer(listReducer, initialState);

  // Get Lists

  const getLists = async () => {
    try {
      const res = await axios.get('/lists');
      dispatch({
        type: GET_LISTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.message
      });
    }
  };

  // Add List

  const addList = async list => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/lists', list, config);
      dispatch({
        type: ADD_LIST,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.message
      });
    }
  };

  // Update List

  const updateList = async list => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(`/lists/${list.id}`, list, config);
      dispatch({
        type: UPDATE_LIST,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.message
      });
    }
  };

  // Delete List

  const deleteList = async id => {
    try {
      await axios.delete(`/lists/${id}`);
      dispatch({
        type: DELETE_LIST,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LIST_ERROR,
        payload: err.response.message
      });
    }
  };

  // set current list

  const setCurrentList = async list => {
    dispatch({
      type: SET_CURRENT_LIST,
      payload: list
    });
  };

  // clear current list

  const clearCurrentList = async () => {
    dispatch({
      type: CLEAR_CURRENT_LIST
    });
  };

  return (
    <ContactContext.Provider
      value={{
        lists: state.lists,
        currentList: state.currentList,
        error: state.error,
        getLists,
        addList,
        updateList,
        deleteList,
        setCurrentList,
        clearCurrentList
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ListState;
