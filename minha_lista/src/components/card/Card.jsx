import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { Card, Image, Description, IconAdd, Delete } from './style.js';

export default function Content(props) {
  return (
    <>
      <Card>
        <Delete>
          <IoIosCloseCircleOutline onClick={() => props.onDelete(props.name)} />
        </Delete>
        <Image src="https://source.unsplash.com/random" alt="" />
        <Description>
          <div>
            <p>{props.name}</p>
            <p>R$ {props.price}</p>
          </div>
          <IconAdd>
            <MdAddShoppingCart />
          </IconAdd>
        </Description>
      </Card>
    </>
  );
}
