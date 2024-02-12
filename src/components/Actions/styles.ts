import styled, { css } from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface ButtonProps {
  background?: string;
}

export const Container = styled.View`
  position: absolute;
  right: 18px;
  bottom: 110px;
  flex-direction: column;
`;

export const Avatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  border-width: 2px;
  border-color: #fff;
`;

export const Button = styled(BorderlessButton)<ButtonProps>`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 42px;
  width: 42px;
  border-radius: 21px;

  ${({ background }) =>
    background &&
    css`
      background-color: ${background};
    `}
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  margin-top: 4px;
`;
