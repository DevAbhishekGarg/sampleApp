import React, {useState} from 'react';
import OTPScreen from '../views/otp/OTPScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Alert} from 'react-native';
import Constant from '../config/Constant';

const OTPViewModel = ({route}: NativeStackScreenProps<any>) => {
  const data = route?.params?.value;

  const [state, setState] = useState('');

  const handleVerifyOTP = () => {
    if (state.length > 3) {
      Alert.alert(Constant.alert);
    }
  };

  const handleOTPonChange = (value: string) => {
    setState(value);
  };

  return <OTPScreen {...{data, handleOTPonChange, handleVerifyOTP}} />;
};

export default OTPViewModel;
