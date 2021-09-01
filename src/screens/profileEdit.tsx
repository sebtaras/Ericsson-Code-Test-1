import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {placeholderColor} from '../../constants';
import {Context} from '../../context';
import {clearLoggedInUser} from '../../storageFunctions';
import {isValidNewPassword} from '../functions/isValidNewPassword';
import {setPassword} from '../redux/slices/userSlice';
import sharedStyles from '../styles/shared';

const EditProfile: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const {loggedInUser} = useContext(Context);
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');

  const handleChangePassword = () => {
    const response = isValidNewPassword(
      loggedInUser!.password,
      currentPassword,
      newPassword,
    );
    if (response.currentPasswordError) {
      setCurrentPasswordError(response.currentPasswordError);
    } else {
      setCurrentPasswordError('');
    }
    if (response.newPasswordError) {
      setNewPasswordError(response.newPasswordError);
    } else {
      setNewPasswordError('');
    }
    if (response.valid) {
      dispatch(
        setPassword({
          email: loggedInUser?.email,
          currentPassword,
          newPassword,
        }),
      );
      setCurrentPassword('');
      setNewPassword('');
      ToastAndroid.showWithGravityAndOffset(
        'Password successfully changed',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        200,
      );
      clearLoggedInUser();
    }
  };

  const dispatch = useDispatch();
  return (
    <View style={[sharedStyles.flexCenteredContainer]}>
      <Text style={[{marginBottom: 30}]}>Change password</Text>
      <TextInput
        style={[sharedStyles.textInput, sharedStyles.blackText]}
        placeholder="Current password"
        placeholderTextColor={placeholderColor}
        onChangeText={text => setCurrentPassword(text)}
        value={currentPassword}
      />
      {currentPasswordError ? (
        <Text style={[sharedStyles.errorText]}>{currentPasswordError}</Text>
      ) : null}
      <TextInput
        style={[sharedStyles.textInput, sharedStyles.blackText]}
        placeholder="New password"
        placeholderTextColor={placeholderColor}
        onChangeText={text => setNewPassword(text)}
        value={newPassword}
      />
      {newPasswordError ? (
        <Text style={[sharedStyles.errorText]}>{newPasswordError}</Text>
      ) : null}
      <TouchableOpacity
        onPress={handleChangePassword}
        style={[
          sharedStyles.button,
          sharedStyles.primaryButton,
          {marginTop: 20},
        ]}>
        <View>
          <Text style={[sharedStyles.whiteText]}>CHANGE PASSWORD</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
