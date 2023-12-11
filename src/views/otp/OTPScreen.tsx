import {SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Constant from '../../config/Constant';
import styles from './styles';
import OTPTextInput from '../../components/OTPTextInput';
import CustomButton from '../../components/CustomButton';

interface OTPProps {
  data: any;
  handleOTPonChange: (value: string) => void;
  handleVerifyOTP: () => void;
}

const OTPScreen = (props: OTPProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={Constant.otp_verify}
        centerImage
        subtitle={`${Constant.otp_sent_to} ${'\n'} ${props?.data} `}
      />
      <OTPTextInput
        blockNo={4}
        onChangeNo={value => props.handleOTPonChange(value)}
      />
      <CustomButton
        title={Constant.verify_otp}
        subTitle={Constant.login_des}
        onPress={() => props.handleVerifyOTP()}
      />
    </SafeAreaView>
  );
};

export default OTPScreen;
