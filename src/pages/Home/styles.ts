import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

interface PicturesProps {
  videosLength: number;
}

export const Container = styled.View`
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const AnimatedView = styled(Animated.View)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Picture = styled(Animated.View)`
  width: ${width}px;
  height: ${height}px;
  overflow: hidden;
`;

export const Pictures = styled(Animated.View)<PicturesProps>`
  width: ${width}px;
  height: ${({ videosLength }) => videosLength * height}px;
  flex-direction: column;
`;

export const Image = styled.ImageBackground`
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
