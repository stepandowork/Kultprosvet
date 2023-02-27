import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TransparentColors } from '../../theme/colors';

interface IProps {
  leftButtons?: React.ReactElement;
  rightButtons?: React.ReactElement;
  title?: string;
}

const Header = ({leftButtons, rightButtons, title}: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftButtonsContainer}>{leftButtons}</View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightButtonsContainer}>{rightButtons}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: TransparentColors.text
  },
  leftButtonsContainer: {
    position: "absolute",
    left: 0,
  },
  rightButtonsContainer: {
    position: "absolute",
    right: 0,
  },
});
