import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { Card, Image, Description, IconAdd, Delete } from './style.js';

export default function Content(props) {
  return (
    <>
      <Card>
        <Delete>
          {/* Envia por props qual card deve ser deletado do LocalStorage */}
          <IoIosCloseCircleOutline onClick={() => props.onDelete(props.name)} />
        </Delete>
        <Image src="https://source.unsplash.com/random" alt="" />
        <Description>
          <div>
            {/* Retorna em cada card seu nome e preço */}
            <p>{props.name}</p>
            <p>{props.format(Number(props.price))}</p>
          </div>
          <IconAdd>
            <MdAddShoppingCart />
          </IconAdd>
        </Description>
      </Card>
    </>
  );
}
