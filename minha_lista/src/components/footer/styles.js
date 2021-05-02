import styled from 'styled-components';

import { COLORS } from '../../style/global';

export const Bottom = styled.footer`
  position: fixed;
  bottom: 0;
  overflow: scroll;

  padding: 15px;
  width: 100%;
  height: 4rem;
  font-size: 2.8rem;

  color: rgba(96, 101, 129, 1);
  background-color: ${COLORS.backgroundDarker};
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  color: white;
`;

export const Line = styled.hr`
  margin-top: 2px;
`;

export const Bottom2 = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  overflow: scroll;

  width: 100%;
  height: 4rem;
  font-size: 2.8rem;

  color: rgba(96, 101, 129, 1);
  background-color: ${COLORS.backgroundDarker};
`;
