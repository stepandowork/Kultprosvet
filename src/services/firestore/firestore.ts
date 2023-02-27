import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Task from '../../interfaces/Task.interface';

const tasksCollection = firestore().collection('tasks');

const createTask = (task: Task, callback: any) => {
  try {
    tasksCollection.add(task).then(callback);
  } catch (error) {
    Alert.alert('Could not create task');
  }
};

const updateTask = async (id?: string, task?: Task, callback?: any) => {
  if (!id || !task) return;
  try {
    await tasksCollection
      .doc(id)
      .update(task)
      .then(() => {
        if (callback) callback();
      });
  } catch (error) {
    Alert.alert('Could not update task');
  }
};

const deleteTask = (id?: string, callback?: any) => {
  try {
    tasksCollection
      .doc(id)
      .delete()
      .then(() => {
        if (callback) callback();
      });
  } catch (error) {
    Alert.alert('Could not delete task');
  }
};

export {createTask, updateTask, deleteTask};
export default tasksCollection;
