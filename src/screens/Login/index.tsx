import {View, Text} from 'react-native';
import React from 'react';
import {indexStyles as styles} from './styles';
import InputForm from '../../components/InputForm';
import {useLogin} from './hook';
import Button from '../../components/Button';

export const Login = () => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    validateUsername,
    validatePassword,
    setValidateUsername,
    setValidatePassword,
    handleUsername,
    handlePassword,
    enabledToSend,
    signIn,
  } = useLogin();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerCard}>
          <Text style={styles.title}>ROOTS TEST</Text>
        </View>
        <View style={styles.form}>
          <InputForm
            label="Username"
            placeholder="username"
            valueInput={username}
            setValueInput={setUsername}
            validateInput={validateUsername}
            setValidateInput={setValidateUsername}
            functionValidation={handleUsername}
            errorMessage="Invalid username"
          />
          <InputForm
            label="Password"
            placeholder="password"
            valueInput={password}
            setValueInput={setPassword}
            validateInput={validatePassword}
            setValidateInput={setValidatePassword}
            functionValidation={handlePassword}
            isPassword={true}
            errorMessage="Invalid password, it must have more than 5 characters"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login" action={signIn} disabled={!enabledToSend} />
        </View>
      </View>
    </View>
  );
};
