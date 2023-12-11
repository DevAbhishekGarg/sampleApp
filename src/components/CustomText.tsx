import React, {ReactNode} from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';

interface TextProps {
  children?: ReactNode;
  style?: StyleProp<TextStyle> | undefined;
  numberOfLines?: number;
  ellipsizeMode?: string;
}

const CustomText = (props: TextProps) => {
  return (
    <Text numberOfLines={props.numberOfLines} style={props.style}>
      {props.children}
    </Text>
  );
};

export default CustomText;
