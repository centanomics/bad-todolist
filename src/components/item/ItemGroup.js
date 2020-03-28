import React, { useContext } from 'react';

import ItemContext from '../../context/item/itemContext';

import Item from './Item';

const ItemGroup = ({ id }) => {
  const itemContext = useContext(ItemContext);

  const { items } = itemContext;

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
