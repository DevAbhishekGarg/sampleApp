import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface OTPInput {
  blockNo: number;
  onChangeNo: (text: string) => void;
}

const OTPTextInput = (props: OTPInput) => {
  const inputs = useRef<Array<TextInput>>([]);

  const [state, setState] = useState({
    code: '',
  });

  const handleCodeChange = (index: number, value: string) => {
    const newCode = state.code.split('');
    newCode[index] = value;
    setState({code: newCode.join('')});

    if (value && inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index: number) => {
    const newCode = state.code.split('');
    newCode[index] = '';
    setState({code: newCode.join('')});

    if (inputs.current[index - 1]) {
      inputs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    props.onChangeNo(state.code);
  }, [state.code, props]);

  return (
    <View style={styles.container}>
      {Array.from({length: props.blockNo}).map((_, index) => (
        <TextInput
          key={index}
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
          returnKeyType="done"
          value={state.code[index]}
          onChangeText={value => handleCodeChange(index, value)}
          ref={ref => {
            inputs.current[index] = ref;
          }}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(index);
            }
          }}
        />
      ))}
    </View>
  );
};

export default OTPTextInput;

const styles = StyleSheet.create({
  otpInput: {
    width: 70,
    height: 46,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
    backgroundColor: '#DADADA',
    marginTop: 20,
    borderColor: '#666666',
    borderWidth: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
