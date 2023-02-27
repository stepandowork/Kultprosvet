import { faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { logout } from '../../services/auth';
import Header from '../Header/Header';
import IconButton from '../IconButton';

interface ITasksListHeaderProps {
  onPressCreate: () => void;
}

const TasksListHeader = ({onPressCreate}: ITasksListHeaderProps) => {
  return (
    <Header
      title={'Tasks'}
      rightButtons={
        <View style={styles.buttonsRow}>
          <IconButton
            icon={faPlus}
            onPress={onPressCreate}
            style={{marginRight: 10}}
          />
          <IconButton
            icon={faRightFromBracket}
            onPress={logout}
            style={{marginRight: 10}}
          />
        </View>
      }
    />
  );
};

export default TasksListHeader;

const styles = StyleSheet.create({
  buttonsRow: {
    flexDirection: "row"
  }
})