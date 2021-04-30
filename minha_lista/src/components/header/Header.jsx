import React from 'react';

import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './logo.svg';
import { Title, Line } from './styles.js';

export default function Header(props) {
  return (
    <>
      <Title index={props.index}>
        <Link to="/" style={{ alignSelf: 'center' }}>
          <MdArrowBack
            style={{
              color: '#d87428',
              display: `${props.index ? 'none' : ''}`,
            }}
          />
        </Link>
        <Logo style={{ margin: 'auto' }} />
      </Title>
      <Line />
    </>
  );
}
