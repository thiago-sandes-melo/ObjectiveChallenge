import React from 'react';
import { useTheme } from '../hooks/Theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharactersList from '../pages/CharactersList';
import CharacterBio from '../pages/CharacterBio';

const MainStackNavigator = createStackNavigator();

const Routes: React.FC = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <MainStackNavigator.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <MainStackNavigator.Screen
          name="CharactersList"
          component={CharactersList}
        />
        <MainStackNavigator.Screen
          name="CharacterBio"
          component={CharacterBio}
        />
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
