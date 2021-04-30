import React from 'react';
import { HiOutlineClipboardList, HiOutlineShoppingBag } from 'react-icons/hi';

import { Bottom, Group, Line } from './styles.js';

const Footer = props => {
  return (
    <>
      <Bottom style={{ padding: `${props.index ? '8px' : '16px'}` }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HiOutlineClipboardList style={{ display: `${props.index ? '' : 'none'}` }} />
        </div>

        <Group style={{ display: `${props.index ? 'none' : 'flex'}` }}>
          <div>
            <HiOutlineShoppingBag /> Total
          </div>
          <p>R$ price</p>
        </Group>
        <Line style={{ display: `${props.index ? 'none' : 'flex'}` }} />
      </Bottom>
    </>
  );
};

export default Footer;
