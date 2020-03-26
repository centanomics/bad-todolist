import React, { useContext, useEffect } from 'react';

import ListGroupItem from './ListGroupItem';

import ListContext from '../../context/list/listContext';

const ListGroup = () => {
  const listContext = useContext(ListContext);

  const { lists, getLists } = listContext;

  useEffect(() => {
    if (lists === null) getLists();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {lists !== null &&
        lists.map(list => <ListGroupItem listData={list} key={list.id} />)}
    </div>
  );
};

export default ListGroup;
