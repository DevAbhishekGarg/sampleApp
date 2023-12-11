import React, {useState} from 'react';
import LoginScreen from '../views/login/LoginScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as routes from './../routes/RoutesConstant';

const LoginViewModel = ({navigation}: NativeStackScreenProps<any>) => {
  const [state, setState] = useState('');

  const handleOTP = () => {
    if (state?.length > 9) {
      navigation.navigate(routes.OTP_SCREEN, {
        value: state,
      });
    }
  };

  const handleChange = (value: string) => {
    setState(value);
  };

  return <LoginScreen {...{handleOTP, state, handleChange}} />;
};

export default LoginViewModel;
