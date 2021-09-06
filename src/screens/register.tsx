import React, {useContext} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {placeholderColor} from '../../constants';
import {Context} from '../../context';
import {storeLoggedInUser} from '../../storageFunctions';
import {createNewUser} from '../functions/createNewUser';
import {isValidRegister} from '../functions/isValidRegister';
import {addNewUser} from '../redux/slices/userSlice';
import {RootState} from '../redux/store';
import sharedStyles from '../styles/shared';

const RegisterScreen: React.FC<any> = ({navigation}) => {
  const {setLoggedInUser} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.user);

  const handleSubmit = () => {
    const response = isValidRegister(
      email,
      password,
      repeatPassword,
      state.users,
    );
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
    if (response.valid) {
      ToastAndroid.showWithGravityAndOffset(
        `User created for "${email}"`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        200,
      );
      const newUser = createNewUser(email, password);
      dispatch(
        addNewUser({
          user: newUser,
        }),
      );
      storeLoggedInUser(newUser);
      setLoggedInUser(newUser);
    }
    console.log(response);
  };

  return (
    <View style={[sharedStyles.flexCenteredContainer]}>
      <Text style={[sharedStyles.largeText, {marginBottom: 30}]}>REGISTER</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={placeholderColor}
        onChangeText={text => setEmail(text)}
        value={email}
        style={[sharedStyles.textInput, sharedStyles.blackText]}
      />
      {emailError ? (
        <Text style={[sharedStyles.errorText]}>{emailError}</Text>
      ) : null}
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        textContentType={'password'}
        placeholderTextColor={placeholderColor}
        value={password}
        style={[sharedStyles.textInput, sharedStyles.blackText]}
      />
      {passwordError ? (
        <Text style={[sharedStyles.errorText]}>{passwordError}</Text>
      ) : null}
      <TextInput
        placeholder="Repeat password"
        onChangeText={text => setRepeatPassword(text)}
        textContentType={'password'}
        placeholderTextColor={placeholderColor}
        value={repeatPassword}
        style={[sharedStyles.textInput, sharedStyles.blackText]}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        style={[
          sharedStyles.button,
          sharedStyles.primaryButton,
          {marginTop: 20},
        ]}>
        <View>
          <Text style={[sharedStyles.whiteText]}>REGISTER</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[sharedStyles.button]}
        onPress={() => {
          setEmailError('');
          setPasswordError('');
          navigation.navigate('Login');
        }}>
        <Text>Login instead</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
