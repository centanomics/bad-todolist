import React, { useContext, useEffect } from 'react';

import ItemContext from '../../context/item/itemContext';

import Item from './Item';

const ItemGroup = ({ id }) => {
  const itemContext = useContext(ItemContext);

  const { items, getItems } = itemContext;

  useEffect(() => {
    getItems(id);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {items !== null &&
        items
          .filter(item => item.listId === id)
          .map(item => <Item itemData={item} key={item.id} />)}
    </div>
  );
};

export default ItemGroup;
