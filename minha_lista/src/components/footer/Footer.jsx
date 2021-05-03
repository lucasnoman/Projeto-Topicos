import React, { useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import { Bottom, Group, Line } from './styles.js';

const Footer = props => {
  // Pega os produtos do LocalStorage
  let localProducts = JSON.parse(localStorage.getItem('products'));
  const [price, _setPrices] = useState(localProducts);

  let sum;
  if (price.length !== 0) {
    // Pega apenas os preços dos produtos e faz a somatória
    const prices = price.map(map => Number(map.price));
    sum = prices.reduce((total, value) => total + value);
  }

  return (
    <>
      <Bottom>
        <Group>
          <div>
            <HiOutlineShoppingBag /> Total
          </div>
          {/* Aqui é feito o tratamento dos dados para apresentar a soma */}
          <p>{isNaN(sum) ? props.format(0) : props.format(sum)}</p>
        </Group>
        <Line />
      </Bottom>
    </>
  );
};

export default Footer;
