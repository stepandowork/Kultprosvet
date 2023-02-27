import {firebase} from '@react-native-firebase/auth';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import EmptyTasks from '../components/EmptyTasks';
import TasksListHeader from '../components/Headers/TasksListHeader';
import {renderTaskItem} from '../components/TaskItem';
import tasksCollection from '../services/firestore/firestore';

import Task from '../interfaces/Task.interface';
import Routes from '../navigation/routes';
import {PrivateStackParamList} from '../navigation/stacks/PrivateStack';

type Props = StackScreenProps<PrivateStackParamList, Routes.TasksList>;

const TasksList = ({navigation}: Props) => {
  const user = firebase.auth().currentUser;

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasksSubscriber = tasksCollection
      .where('userId', '==', user?.uid)
      .orderBy('priority', 'desc')
      .orderBy('deadline', 'asc')
      .onSnapshot(snapShot => {
        const tasksData = snapShot?.docs?.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          } as Task;
        });
        setTasks(tasksData);
      });
    return tasksSubscriber;
  }, []);

  const onPressCreateTask = () => {
    navigation.navigate(Routes.CreateTask, {task: undefined});
  };

  return (
    <View style={styles.container}>
      <TasksListHeader onPressCreate={onPressCreateTask} />
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        ListEmptyComponent={EmptyTasks}
        extraData={tasks}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
});
