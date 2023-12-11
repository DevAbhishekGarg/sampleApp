import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import CustomText from './CustomText';
import Images from '../assets';

interface HeaderProps {
  title: string;
  centerImage: boolean;
  subtitle?: string;
}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.titleText}>{props.title}</CustomText>
      {props.centerImage && <Image {...Images.LOGIN} />}
      <CustomText style={styles.subtitleText}>{props.subtitle}</CustomText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitleText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
