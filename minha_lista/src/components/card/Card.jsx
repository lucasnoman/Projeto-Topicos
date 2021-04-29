import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { Card, Image, Description, IconAdd, Delete } from './style.js';

export default function Content(props) {
  return (
    <>
      <Card>
        <Delete>
          <IoIosCloseCircleOutline />
        </Delete>
        <Image src="https://source.unsplash.com/random" alt="" />
        <Description>
          <div>
            <p>Produto</p>
            <p>R$ preço</p>
          </div>
          <IconAdd>
            <MdAddShoppingCart />
          </IconAdd>
        </Description>
      </Card>
    </>
  );
}
