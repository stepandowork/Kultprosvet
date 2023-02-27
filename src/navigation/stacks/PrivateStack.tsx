import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Task from '../../interfaces/Task.interface';
import CreateTask from '../../screens/CreateTask';
import TasksList from '../../screens/TasksList';
import Routes from '../routes';

export type PrivateStackParamList = {
  [Routes.TasksList]: undefined;
  [Routes.CreateTask]: {task: undefined | Task};
};

const Stack = createStackNavigator<PrivateStackParamList>();

const PrivateStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.TasksList} component={TasksList} />
      <Stack.Screen name={Routes.CreateTask} component={CreateTask} />
    </Stack.Navigator>
  );
};

export default PrivateStack;

const styles = StyleSheet.create({});
