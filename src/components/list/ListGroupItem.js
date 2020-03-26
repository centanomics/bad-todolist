import React from 'react';

import ItemGroup from '../item/ItemGroup';

const ListGroupItem = ({ listData: { title, id } }) => {
  return (
    <section>
      <h3>{title}</h3>
      <ItemGroup id={id} />
    </section>
  );
};

export default ListGroupItem;
