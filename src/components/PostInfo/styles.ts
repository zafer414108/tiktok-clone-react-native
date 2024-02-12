import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  position: absolute;
  left: 18px;
  bottom: 110px;
  width: ${width - 110}px;

  flex-direction: column;
`;

export const Nickname = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 15px;
`;
