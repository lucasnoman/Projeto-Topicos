import styled from 'styled-components';

import { COLORS } from '../../style/global';
import { SIZES } from '../../style/global';

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 24px;
`;

export const InputText = styled.input`
  color: ${COLORS.textPrimary};
  font-size: ${SIZES.pixel18};
  background-color: ${COLORS.backgroundDarker};

  width: 100%;
  height: 48px;
  padding: 8px;
  margin-bottom: 16px;

  border: none;
  border-radius: 10px;
  outline: none;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: ${SIZES.pixel18};
  }
  :-ms-input-placeholder {
    font-size: ${SIZES.pixel18};
  }
`;

export const ImageField = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: ${COLORS.backgroundDarker};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  height: 160px;
  width: 100%;
  border-radius: 10px;
`;

export const InputImage = styled.input`
  display: none;
`;

export const LabelImageButton = styled.label`
  border: 1px solid #ddd8cb63;
  padding: 2px;
  border-radius: 6px;

  margin-right: 0.8rem;
  background-color: ${COLORS.backgroundLighter};
  color: ${COLORS.textPrimary};

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 4rem;
`;

export const Button = styled.button`
  display: ${props => (props.primary ? 'block' : 'flex')};
  align-items: ${props => (props.primary ? '' : 'center')};
  justify-content: ${props => (props.primary ? '' : 'center')};

  color: ${props => (props.primary ? COLORS.backgroundDarker : COLORS.textPrimary)};
  background-color: ${props =>
    props.primary ? COLORS.buttonPrimary : COLORS.backgroundDarker};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-size: ${SIZES.pixel20};
  font-weight: 500;

  width: 100%;
  height: 48px;
  margin-bottom: 16px;

  border: ${props => (props.primary ? 'none' : '1px solid' + COLORS.buttonPrimary)};
  border-radius: 10px;
`;
