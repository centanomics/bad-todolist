import React, { useContext, useEffect } from 'react';

import ListGroupItem from './ListGroupItem';

import ListContext from '../../context/list/listContext';
import ItemContext from '../../context/item/itemContext';

const ListGroup = () => {
  const listContext = useContext(ListContext);
  const itemContext = useContext(ItemContext);

  const { lists, getLists } = listContext;
  const { getItems } = itemContext;

  // gets lists and items from db
  useEffect(() => {
    if (lists === null) {
      getLists();
      getItems();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div id='listgroup'>
      {lists !== null &&
        lists.map(list => <ListGroupItem listData={list} key={list.id} />)}
    </div>
  );
};

export default ListGroup;
