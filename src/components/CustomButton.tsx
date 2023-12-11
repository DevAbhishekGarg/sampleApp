import React from 'react';
import {Pressable, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import CustomText from './CustomText';
import {multipleTapHandler} from '../hoc/multipleTapHandler';

interface ImplButton {
  title: string;
  onPress: () => void;
  buttonStyles?: ViewStyle | any;
  textStyles?: TextStyle | any;
  txtStyle?: any;
  subTitle?: string;
}

const CustomButton = (props: ImplButton) => {
  const CommonButton = multipleTapHandler(Pressable);

  return (
    <>
      <CommonButton
        onPress={props.onPress}
        style={[styles.button, props.buttonStyles]}>
        <CustomText style={[styles.buttonText, props.textStyles]}>
          {props.title}
        </CustomText>
      </CommonButton>
      <CustomText style={styles.subTitle}>{props.subTitle}</CustomText>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: 'orange',
    borderRadius: 33,
    marginVertical: 20,
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subTitle: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 12,
    letterSpacing: 0.8,
  },
});
