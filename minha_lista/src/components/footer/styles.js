import styled from 'styled-components';

import { COLORS } from '../../style/global';

export const Bottom = styled.footer`
  position: fixed;
  bottom: 0;
  overflow: scroll;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4rem;
  font-size: 2.8rem;

  color: rgba(96, 101, 129, 1);
  background-color: ${COLORS.backgroundDarker};
`;
