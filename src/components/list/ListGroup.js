import React, { useContext, useEffect } from 'react';

import ListGroupItem from './ListGroupItem';

import ListContext from '../../context/list/listContext';
import ItemContext from '../../context/item/itemContext';

const ListGroup = () => {
  const listContext = useContext(ListContext);
  const itemContext = useContext(ItemContext);

  const { lists, getLists } = listContext;
  const { getItems } = itemContext;

  useEffect(() => {
    if (lists === null) {
      getLists();
      getItems();
    }
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
