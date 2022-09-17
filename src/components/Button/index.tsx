import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
  action?: () => void;
  disabled?: boolean;
}

const Button = ({title, action, disabled}: Props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={action} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
