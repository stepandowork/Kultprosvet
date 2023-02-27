import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Colors from '../../theme/colors';

interface IconButtonProps extends TouchableOpacityProps {
  icon: any;
}

const hitSlop = {
  left: 10,
  right: 10,
  top: 10,
  bottom: 10,
};

const IconButton = ({icon, ...rest}: IconButtonProps) => {
  return (
    <TouchableOpacity {...rest} hitSlop={hitSlop}>
      <FontAwesomeIcon icon={icon} size={14} color={Colors.green} />
    </TouchableOpacity>
  );
};

export default IconButton;
