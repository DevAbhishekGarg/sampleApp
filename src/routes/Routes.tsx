import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as routes from './RoutesConstant';
import {LoginViewModel, OTPViewModel} from '../viewModel';

type RootStackList = {
  [routes.LOGIN_SCREEN]: undefined;
  [routes.OTP_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.LOGIN_SCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginViewModel} />
        <Stack.Screen name={routes.OTP_SCREEN} component={OTPViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
