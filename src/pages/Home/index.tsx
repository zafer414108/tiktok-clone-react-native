/* eslint-disable global-require */
import React from 'react';
import { Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  add,
  clockRunning,
  cond,
  debug,
  divide,
  eq,
  floor,
  not,
  set,
  useCode,
} from 'react-native-reanimated';
import {
  snapPoint,
  timing,
  useClock,
  usePanGestureHandler,
  useValue,
} from 'react-native-redash';

import Actions from '../../components/Actions';
import PostInfo from '../../components/PostInfo';

import { Container, AnimatedView, Picture, Pictures, Image } from './styles';

const { height } = Dimensions.get('window');

export const assets = [
  require('../../assets/images/3.jpg'),
  require('../../assets/images/2.jpg'),
  require('../../assets/images/4.jpg'),
  require('../../assets/images/1.jpg'),
];

const snapPoints = assets.map((_, i) => i * -height);

const Home: React.FC = () => {
  const clock = useClock();
  const index = useValue(0);
  const offsetY = useValue(0);
  const translateY = useValue(0);
  const {
    gestureHandler,
    state,
    velocity,
    translation,
  } = usePanGestureHandler();
  const to = snapPoint(translateY, velocity.y, snapPoints);

  useCode(
    () => [
      cond(eq(state, State.ACTIVE), [
        set(translateY, add(offsetY, translation.y)),
      ]),
      cond(eq(state, State.END), [
        set(translateY, timing({ clock, from: translateY, to })),
        set(offsetY, translateY),
        cond(not(clockRunning(clock)), [
          set(index, floor(divide(translateY, -height))),
          debug('index', index),
        ]),
      ]),
    ],
    [],
  );

  return (
    <Container>
      <PanGestureHandler {...gestureHandler}>
        <AnimatedView>
          <Pictures
            videosLength={assets.length}
            style={{ transform: [{ translateY }] }}
          >
            {assets.map(source => (
              <Picture key={source}>
                <Image {...{ source }}>
                  <PostInfo />
                  <Actions />
                </Image>
              </Picture>
            ))}
          </Pictures>
        </AnimatedView>
      </PanGestureHandler>
    </Container>
  );
};

export default Home;
