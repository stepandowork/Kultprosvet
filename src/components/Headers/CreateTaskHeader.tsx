import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import React from 'react';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Header from '../Header/Header';
import IconButton from '../IconButton';

interface IProps {
  isCreating?: boolean;
}

const CreateTaskHeader = ({isCreating}: IProps) => {
  const navigation = useNavigation();
  const onPressBack = () => navigation.goBack();
  return (
    <Header
      title={isCreating ? 'Create Task' : 'Edit Task'}
      leftButtons={<IconButton icon={faArrowLeft} onPress={onPressBack} />}
    />
  );
};

export default CreateTaskHeader;

const styles = StyleSheet.create({});
