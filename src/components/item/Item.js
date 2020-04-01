import React from 'react';

const Item = ({ itemData: { title } }) => {
  return <div className='item'>{title}</div>;
};

export default Item;
