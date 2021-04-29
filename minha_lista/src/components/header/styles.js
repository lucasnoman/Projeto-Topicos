import styled from 'styled-components';

import { COLORS } from '../../style/global';
import { SIZES } from '../../style/global';

export const Title = styled.h1`
  display: flex;
  justify-content: center;

  padding: 10px;
  width: 100%auto;
  padding-right: ${props => (props.index ? '10' : '36px')};

  font-size: ${SIZES.pixel26};

  color: ${COLORS.textPrimary};
  background-color: ${COLORS.backgroundDarker};
`;

export const Line = styled.hr`
  border-color: ${COLORS.buttonPrimary};
`;
