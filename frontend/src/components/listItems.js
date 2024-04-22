import React from 'react';
import Item from './card';

function ItemList({ data }) {

  return (
    <div className="container px-4 px-lg-5 mt-5" >  
      <div className="row gx-4 gx-lg-5 justify-content-center">
        {data.items.map((item, index) => (
          <Item data={item} index={index} card={data.card}></Item>
        ))}

      </div>
    </div>
    
  );

}


export default ItemList;