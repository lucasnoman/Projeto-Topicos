import React, { useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import { Bottom, Group, Line } from './styles.js';

const Footer = props => {
  let localProducts = JSON.parse(localStorage.getItem('products'));
  const [price, _setPrices] = useState(localProducts);

  let sum;
  if (price.length !== 0) {
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
          <p>{sum <= 0 ? props.format(0) : props.format(sum)}</p>
        </Group>
        <Line />
      </Bottom>
    </>
  );
};

export default Footer;
