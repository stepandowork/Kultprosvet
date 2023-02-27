import {firebase} from '@react-native-firebase/auth';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import DeadlinePicker from '../components/DeadlinePicker';
import CreateTaskHeader from '../components/Headers/CreateTaskHeader';
import Input from '../components/Input';
import PriorityDropDownPicker from '../components/PriorityDropDownPicker';
import StylishButton from '../components/StylishButton.tsx';
import StylishText from '../components/StylishText';
import {datesAreEqual} from '../helpers/dateHelpers';
import Task from '../interfaces/Task.interface';
import Routes from '../navigation/routes';
import {PrivateStackParamList} from '../navigation/stacks/PrivateStack';
import {createTask, updateTask} from '../services/firestore/firestore';
import {TransparentColors} from '../theme/colors';
import validateTask from '../validation/validateTask';

type Props = StackScreenProps<PrivateStackParamList, Routes.CreateTask>;

const CreateTask = ({navigation, route}: Props) => {
  const user = firebase.auth().currentUser;
  const nameInput = useRef<TextInput>();
  const {
    params: {task},
  } = route;
  const [name, setName] = useState(task?.name);
  const [priority, setPriority] = useState<number>(task?.priority || 0);
  const [deadline, setDeadline] = useState(
    (task?.deadline as FirebaseFirestoreTypes.Timestamp)?.toDate() ||
      new Date(),
  );

  useEffect(() => {
    if (nameInput.current) {
      nameInput.current.focus();
    }
  }, [nameInput]);

  const onConfirm = () => {
    validateTask(name, priority, deadline, postTask);
  };

  const goBack = () => navigation.goBack();

  const postTask = () => {
    const taskToPost: Task = {
      name,
      priority,
      deadline,
      userId: user?.uid,
      completed: task?.completed || false,
    };
    try {
      if (!task) {
        createTask(taskToPost, goBack);
      } else {
        const taskDeadlineDate = (
          task.deadline as FirebaseFirestoreTypes.Timestamp
        ).toDate();
        if (
          name !== task.name ||
          !datesAreEqual(taskDeadlineDate, deadline) ||
          priority !== task?.priority
        ) {
          updateTask(task.id, taskToPost, goBack);
        } else {
          goBack();
        }
      }
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <View style={styles.container}>
      <CreateTaskHeader isCreating={!Boolean(task)} />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flex: 1}}
        bounces={false}>
        <Input
          forwardRef={nameInput}
          label={'Name'}
          value={name}
          onChangeText={setName}
          placeholder={"Task's name"}
          placeholderTextColor={'black'}
          containerStyle={{marginBottom: 10}}
        />
        <DeadlinePicker deadline={deadline} setDeadline={setDeadline} />
        <PriorityDropDownPicker value={priority} setValue={setPriority} />
      </ScrollView>
      <StylishButton onPress={onConfirm} style={styles.createButton}>
        <StylishText>{task ? 'Update' : 'Create'}</StylishText>
      </StylishButton>
    </View>
  );
};

export default CreateTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: TransparentColors.background,
  },
  createButton: {
    position: 'absolute',
    width: '100%',
    left: 10,
    bottom: 20,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
});
