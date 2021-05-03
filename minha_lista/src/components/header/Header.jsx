import React from 'react';

import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './logo.svg';
import { Title, Line } from './styles.js';

export default function Header(props) {
  return (
    <>
      {/* Como o Header é usado em duas páginas e cada uma tem uma variação,
        houve a necessidade de enviar uma informação como props para poder
        definir o estilo do Header em cada página
    */}
      <Title index={props.index}>
        {/* Esse link é do router para poder fazer a seta redirecionar para
            o índice
        */}
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
