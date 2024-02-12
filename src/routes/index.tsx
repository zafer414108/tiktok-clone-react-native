import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';

import Home from '../pages/Home';

import Button from '../components/Button';

const Tab = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: 'transparent',
            borderTopColor: 'rgba(255,255,255,0.3)',
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#eee',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <EntypoIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FeatherIcons name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="New"
          component={Home}
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => <Button />,
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <EntypoIcons name="chat" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntIcons name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
