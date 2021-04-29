import styled from 'styled-components';

import { COLORS } from '../../style/global';
import { SIZES } from '../../style/global';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 155px;
  width: 155px;

  background-color: ${COLORS.backgroundLighter};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 10px;

  margin: 8px auto 0 4%;
`;

export const Image = styled.img`
  height: 58%;
  width: 85%;
  border-radius: 6px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 3.3rem;

  padding-top: 0.4rem;
  font-size: 14px;
  font-weight: 500;

  color: ${COLORS.textPrimary};
`;

export const IconAdd = styled.div`
  padding-top: 0.5rem;
  font-size: ${SIZES.pixel24};

  color: ${COLORS.buttonAdd};
`;

export const Delete = styled.div`
  position: relative;
  top: -18px;
  right: -10px;

  margin-left: auto;
  margin-bottom: -1.6rem;

  font-size: ${SIZES.pixel24};
  color: ${COLORS.buttonDelete};
`;
