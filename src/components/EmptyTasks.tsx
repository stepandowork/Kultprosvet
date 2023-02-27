import React from 'react';
import { StyleSheet, View } from 'react-native';
import StylishText from './StylishText';

const EmptyTasks = () => {
  return (
    <View style={styles.container}>
      <StylishText>There is nothing here yet...</StylishText>
    </View>
  );
};

export default EmptyTasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
