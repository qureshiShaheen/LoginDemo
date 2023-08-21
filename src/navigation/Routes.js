//imports from react
import React from 'react';

//navigation libraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import { Screen } from '../constant/Screen';
import LogIn from '../Screen/Authentication/LogIn';
import Splash from '../Screen/Authentication/Splash';
import Home from '../Screen/Home';
import DetailScreen from '../Screen/DetailScreen';

const Stack = createNativeStackNavigator();

//main component
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screen.SPLASH} component={Splash} />
        <Stack.Screen name={Screen.LOGIN} component={LogIn} />
        <Stack.Screen name={Screen.HOME} component={Home} />
        <Stack.Screen name={Screen.DETAIL_SCREEN} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//export component
export default Routes;