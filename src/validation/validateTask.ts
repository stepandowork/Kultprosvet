import {Alert} from 'react-native';

const validateTask = (
  name?: string,
  priority?: number,
  deadline?: Date,
  callback?: any,
) => {
  if (!name) return Alert.alert('Please provide a name for the task');
  if (!priority) return Alert.alert('Please provide a priority for the task');
  let now = new Date();
  if (!deadline || now.getTime() >= deadline?.getTime()) {
    return Alert.alert('Please provide a valid deadline');
  }
  if (callback) callback();
};

export default validateTask;
