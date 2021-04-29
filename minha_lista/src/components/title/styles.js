import styled from 'styled-components';

import { COLORS } from '../../style/global';
import { SIZES } from '../../style/global';

export const TitleH1 = styled.h1`
  display: flex;
  justify-content: center;

  color: ${COLORS.textPrimary};
  font-weight: 500;
  font-size: ${SIZES.pixel24};

  margin: 16px 0;
`;
