import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { TransparentColors } from '../../theme/colors';

const StylishText = (props: TextProps) => {
  return <Text {...props} style={[styles.text, props.style]}>{props.children}</Text>;
};

export default StylishText;

const styles = StyleSheet.create({
    text: {
        color: TransparentColors.text
    }
});
