import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import taskPriorities from '../constants/taskPriorities';
import Colors, { TransparentColors } from '../theme/colors';

interface IProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const PriorityDropDownPicker = ({value, setValue}: IProps) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Highest', value: taskPriorities.Highest},
    {label: 'High', value: taskPriorities.High},
    {label: 'Medium', value: taskPriorities.Medium},
    {label: 'Low', value: taskPriorities.Low},
    {label: 'Lowest', value: taskPriorities.Lowest},
  ]);
  return (
    <View>
      <Text style={styles.label}>Priority</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        textStyle={styles.dropdownTextStyle}
        dropDownContainerStyle={styles.dropdownStyle}
        style={styles.dropdownStyle}
      />
    </View>
  );
};

export default PriorityDropDownPicker;

const styles = StyleSheet.create({
  dropdownStyle: {
    opacity: 1,
    backgroundColor: Colors.lightGreen,
    borderColor: TransparentColors.border,
  },
  label: {
    marginBottom: 10,
    color: TransparentColors.text
  },
  dropdownTextStyle: {
    color: TransparentColors.text
  }
});
