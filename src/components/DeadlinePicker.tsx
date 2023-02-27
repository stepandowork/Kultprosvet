import React from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Colors, { TransparentColors } from '../theme/colors';
import StylishText from './StylishText';

interface IProps {
  deadline: Date;
  setDeadline: (date: Date) => void;
}

const DeadlinePicker = ({deadline, setDeadline}: IProps) => {
  return (
    <View>
      <StylishText style={styles.label}>Deadline</StylishText>
      <DatePicker
        date={deadline}
        onDateChange={setDeadline}
        minimumDate={new Date()}
        style={styles.datePicker}
        textColor={Colors.green}
      />
    </View>
  );
};

export default DeadlinePicker;

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
  },
  datePicker: {
    backgroundColor: TransparentColors.card,
  }
});
