import React from 'react';
import {
  StyleProp,
  StyleSheet, TextInput,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native';
import { TransparentColors } from '../theme/colors';
import StylishText from './StylishText';

interface InputProps extends TextInputProps {
  forwardRef: any;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const Input = ({forwardRef, label, containerStyle, ...rest}: InputProps) => {
  return (
    <View style={[containerStyle]}>
      {label ? <StylishText style={styles.label}>{label}</StylishText> : null}
      <View style={styles.container}>
        <TextInput ref={forwardRef} {...rest} style={[styles.textInput, rest.style]} placeholderTextColor={TransparentColors.placeholder}/>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: TransparentColors.card,
    borderColor: TransparentColors.border
  },
  textInput: {
    color: TransparentColors.text,
    padding: 0,
  },
  label: {
    marginBottom: 5,
  },
});
