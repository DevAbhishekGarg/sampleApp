import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  login: {
    height: 300,
    width: 250,
    resizeMode: 'contain',
  },
  downward: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
});

const Images = {
  LOGIN: {
    source: require('./work.png'),
    style: styles.login,
  },
  DOWNWARD: {
    source: require('./downward.png'),
    style: styles.downward,
  },
};

export default Images;
