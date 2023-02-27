import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import taskPriorities from '../constants/taskPriorities';
import getDateString from '../helpers/dateHelpers';
import Task from '../interfaces/Task.interface';
import Routes from '../navigation/routes';
import { PrivateStackParamList } from '../navigation/stacks/PrivateStack';
import { deleteTask, updateTask } from '../services/firestore/firestore';
import { TransparentColors } from '../theme/colors';
import CheckBox from './CheckBox';
import IconButton from './IconButton';
import StylishText from './StylishText';

interface ITaskItemProps {
  task?: Task;
}

type StackProps = StackScreenProps<PrivateStackParamList, Routes.TasksList>;
type NavProp = StackProps['navigation'];

const TaskItem = React.memo(
  ({task}: ITaskItemProps) => {
    const navigation = useNavigation<NavProp>();
    const formattedDeadline = getDateString(
      (task?.deadline as FirebaseFirestoreTypes.Timestamp).toDate(),
    );
    const [loading, setLoading] = useState(false);

    const onPressComplete = () => {
      if (!loading) {
        setLoading(true);
        updateTask(task?.id, {completed: !task?.completed}).then(() => {
          setLoading(false);
        });
      }
    };

    const onPressEdit = () => {
      navigation.navigate(Routes.CreateTask, {task});
    };

    const onPressDelete = () => {
      Alert.alert(
        'Are you sure?',
        `Do you want to delete the task "${task?.name}?`,
        [{text: 'Ok', onPress: () => deleteTask(task?.id)}, {text: 'Cancel'}],
      );
    };

    return (
      <View>
        <View style={styles.titleContainer}>
          <StylishText numberOfLines={1} style={{maxWidth: '100%', fontWeight: "bold"}}>
            {task?.name}
          </StylishText>
        </View>
        <View style={styles.container}>
          <View style={styles.propertyRow}>
            <StylishText style={styles.propertyName}>Deadline: </StylishText>
            <StylishText>
              {formattedDeadline?.date} {formattedDeadline?.time}
            </StylishText>
          </View>
          <View style={styles.propertyRow}>
            <StylishText style={styles.propertyName}>Priority: </StylishText>
            <StylishText>{taskPriorities[task?.priority || 1]}</StylishText>
          </View>
          <View style={styles.propertyRow}>
            <StylishText style={styles.propertyName}>Completed: </StylishText>
            <CheckBox
              disabled={loading}
              isChecked={task?.completed}
              onPress={onPressComplete}
            />
          </View>
          <View style={styles.iconRow}>
            <StylishText onPress={onPressEdit}>Edit</StylishText>
            <IconButton
              icon={faEdit}
              onPress={onPressEdit}
              disabled={loading}
            />
          </View>
          <View style={styles.iconRow}>
            <StylishText onPress={onPressDelete}>Delete</StylishText>
            <IconButton
              icon={faTrash}
              onPress={onPressDelete}
              disabled={loading}
            />
          </View>
        </View>
      </View>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.task?.id === nextProps.task?.id &&
      prevProps.task?.completed === nextProps.task?.completed &&
      (prevProps.task?.deadline as FirebaseFirestoreTypes.Timestamp).isEqual(
        nextProps.task?.deadline as FirebaseFirestoreTypes.Timestamp,
      ) &&
      prevProps.task?.name === nextProps.task?.name &&
      prevProps.task?.priority === nextProps.task?.priority
    );
  },
);

interface IRenderTaskProps {
  item: Task;
  index: number;
}

const renderTaskItem = ({item}: IRenderTaskProps) => {
  return <TaskItem task={item} key={item.id} />;
};
export { renderTaskItem };
export default TaskItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderWidth: 1,
    backgroundColor: TransparentColors.card,
    borderColor: TransparentColors.border,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    padding: 10,
  },
  titleContainer: {
    width: '30%',
    padding: 10,
    backgroundColor: TransparentColors.cardTitle,
    borderWidth: 1,
    borderColor: TransparentColors.border,
    borderBottomWidth: 0,
    borderTopRightRadius: 10
  },
  propertyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  propertyName: {
    fontWeight: 'bold',
  },
  completedButton: {
    borderWidth: 1,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRow: {
    width: '25%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
    padding: 3,
  },
});
