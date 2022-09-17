import React, {Dispatch} from 'react';
import {Text, TextInput, View} from 'react-native';
import {indexStyles as styles} from './styles';

interface Props {
  label: string;
  placeholder: string;
  errorMessage?: string;
  valueInput: string;
  validateInput: boolean;
  isPassword?: boolean | undefined;
  setValueInput: Dispatch<React.SetStateAction<string>>;
  setValidateInput: Dispatch<React.SetStateAction<boolean>>;
  functionValidation: (text: string) => boolean;
}

const InputForm = ({
  label,
  placeholder,
  valueInput,
  setValueInput,
  validateInput,
  setValidateInput,
  functionValidation,
  errorMessage,
  isPassword,
}: Props) => {
  const validateFunction = (e: string) => {
    if (functionValidation(e)) {
      setValidateInput(true);
    } else {
      setValidateInput(false);
    }
    setValueInput(e);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txtlabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={valueInput}
          textContentType={isPassword ? 'password' : undefined}
          secureTextEntry={isPassword}
          style={styles.inputWidth}
          onChangeText={e => validateFunction(e)}
        />
      </View>

      <Text style={styles.errorMsg}>
        {valueInput.length === 0 ? '' : !validateInput ? errorMessage : ''}
      </Text>
    </View>
  );
};

export default InputForm;
