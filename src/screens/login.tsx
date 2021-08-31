import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {placeholderColor} from '../../constants';
import {Context} from '../../context';
import {isValidUser} from '../functions/isValidUser';
import {RootState} from '../redux/store';
import sharedStyles from '../styles/shared';

const styles = StyleSheet.create({});

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const {setLoggedInUser} = useContext(Context);
  const state = useSelector((state: RootState) => state.user);

  const handleSubmit = () => {
    const response = isValidUser(email, password, state.users);
    if (response.valid && response.user) {
      setLoggedInUser(response.user);
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
    <View style={[sharedStyles.flexCenteredContainer]}>
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
