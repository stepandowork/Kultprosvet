import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import Colors, { TransparentColors } from '../../theme/colors';

interface IProps extends TouchableOpacityProps {
  isChecked?: boolean;
}

const CheckBox = ({isChecked, ...rest}: IProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.completedButton}>
      {rest.disabled ? (
        <ActivityIndicator size={10} />
      ) : isChecked ? (
        <FontAwesomeIcon icon={faCheck} size={10} color={Colors.green}/>
      ) : null}
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  completedButton: {
    borderWidth: 1,
    borderColor: TransparentColors.border,
    backgroundColor: TransparentColors.background,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
