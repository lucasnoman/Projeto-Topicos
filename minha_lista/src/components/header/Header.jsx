import React from 'react';

import { MdArrowBack } from 'react-icons/md';

import { ReactComponent as Logo } from './logo.svg';
import { Title, Line } from './styles.js';

export default function Header(props) {
  return (
    <>
      <Title index={props.index}>
        <MdArrowBack
          style={{
            alignSelf: 'center',
            color: '#d87428',
            display: `${props.index ? 'none' : ''}`,
          }}
        />
        <Logo style={{ margin: 'auto' }} />
      </Title>
      <Line />
    </>
  );
}
