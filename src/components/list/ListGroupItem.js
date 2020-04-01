import React from 'react';

import ItemGroup from '../item/ItemGroup';

const ListGroupItem = ({ listData: { title, id } }) => {
  return (
    <section className='listGroupItem'>
      <h3>{title}</h3>
      <ItemGroup id={id} />
    </section>
  );
};

export default ListGroupItem;
