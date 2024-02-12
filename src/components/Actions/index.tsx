import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import { Container, Avatar, Button, Text } from './styles';

const Actions: React.FC = () => (
  <Container>
    <Button>
      <Avatar source={{ uri: 'https://github.com/avrcoelho.png' }} />
    </Button>
    <Button>
      <FAIcon name="heart" size={34} color="#fff" />
      <Text>1.5M</Text>
    </Button>
    <Button>
      <FAIcon name="comment" size={34} color="#fff" />
      <Text>100</Text>
    </Button>
    <Button background="#00e676">
      <FAIcon name="whatsapp" size={30} color="#fff" />
    </Button>
  </Container>
);

export default Actions;
