import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {placeholderColor} from '../../constants';
import {Context} from '../../context';
import {isValidUser} from '../functions/isValidUser';
import sharedStyles from '../styles/shared';

const styles = StyleSheet.create({});

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const context = useContext(Context);

  const handleSubmit = () => {
    const response = isValidUser(email, password);
    if (response.valid) {
      context.setIsLoggedIn(true);
    }
    if (response.emailError) {
      setEmailError(response.emailError);
    } else {
      setEmailError('');
    }
    if (response.passwordError) {
      setPasswordError(response.passwordError);
    } else {
      setPasswordError('');
    }
    console.log(response);
  };

  return (
    <View style={[sharedStyles.flexContainer]}>
      <Text style={[sharedStyles.largeText, {marginBottom: 30}]}>LOGIN</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={placeholderColor}
        onChangeText={text => setEmail(text)}
        style={[sharedStyles.textInput, sharedStyles.blackText]}
      />
      {emailError ? (
        <Text style={[sharedStyles.errorText]}>{emailError}</Text>
      ) : null}
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        placeholderTextColor={placeholderColor}
        style={[sharedStyles.textInput, sharedStyles.blackText]}
      />
      {passwordError ? (
        <Text style={[sharedStyles.errorText]}>{passwordError}</Text>
      ) : null}
      <TouchableOpacity
        onPress={handleSubmit}
        style={[
          sharedStyles.button,
          sharedStyles.primaryButton,
          {marginTop: 20},
        ]}>
        <View>
          <Text style={[sharedStyles.whiteText]}>LOGIN</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
