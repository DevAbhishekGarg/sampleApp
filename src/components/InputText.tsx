import React from 'react';
import {
  KeyboardTypeOptions,
  ViewStyle,
  TextInput,
  StyleProp,
  TextStyle,
  StyleSheet,
  Pressable,
  Image,
  ImageSourcePropType,
  ImageStyle,
  View,
} from 'react-native';
import {multipleTapHandler} from '../hoc/multipleTapHandler';
import CustomText from './CustomText';

interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLength?: number | undefined;
  containerStyle?: ViewStyle;
  style?: StyleProp<TextStyle> | undefined;
  leftIcon?: ImageSourcePropType;
  leftClick?: () => void;
  leftIconStyle?: StyleProp<ImageStyle> | undefined;
}

const InputText = (props: TextInputProps) => {
  const Press = multipleTapHandler(Pressable);
  return (
    <View style={style.container}>
      {props.leftIcon && (
        <>
          <CustomText>+91</CustomText>
          <Press onPress={props.leftClick}>
            <Image
              {...props.leftIcon}
              style={[style.leftIcon, props.leftIconStyle]}
            />
          </Press>
        </>
      )}
      <TextInput
        defaultValue={props?.defaultValue}
        placeholder={props.placeholder}
        placeholderTextColor={'grey'}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        returnKeyType={'done'}
        style={[style.inputText, props.style]}
      />
    </View>
  );
};

export default InputText;

const style = StyleSheet.create({
  container: {
    borderRadius: 33,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    padding: 16,
    borderWidth: 1,
    backgroundColor: '#DADADA',
    borderColor: '#666666',
  },
  inputText: {
    color: 'black',
    fontSize: 14,
    width: '80%',
  },

  leftIcon: {
    height: 14,
    width: 14,
    tintColor: 'black',
    resizeMode: 'contain',
  },
});
