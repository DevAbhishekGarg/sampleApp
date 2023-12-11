import {SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import Constant from '../../config/Constant';
import Images from '../../assets';

interface LoginProps {
  handleOTP: () => void;
  state: string;
  handleChange: (value: string) => void;
}

const LoginScreen = (props: LoginProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={Constant.login} centerImage />
      <InputText
        leftIcon={Images.DOWNWARD}
        value={props.state}
        onChangeText={value => props.handleChange(value)}
        placeholder={Constant.phone_number}
        keyboardType="number-pad"
        style={styles.input}
        leftIconStyle={styles.leftIcon}
        maxLength={10}
      />
      <CustomButton
        title={Constant.get_otp}
        subTitle={Constant.login_des}
        onPress={() => props.handleOTP()}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
