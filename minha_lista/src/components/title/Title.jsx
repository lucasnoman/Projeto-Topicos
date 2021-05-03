import React from 'react';

import { TitleH1 } from './styles.js';

export default function Title(props) {
  // Título que recebe o conteúdo como props na página em que é usado
  return <TitleH1>{props.children}</TitleH1>;
}
