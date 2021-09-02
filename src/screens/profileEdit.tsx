import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {placeholderColor, SeparatorType} from '../../constants';
import {Context} from '../../context';
import {clearLoggedInUser, storeLoggedInUser} from '../../storageFunctions';
import Separator from '../components/separator';
import {getWidth} from '../functions/getDimensions';
import {isValidNewPassword} from '../functions/isValidNewPassword';
import {User} from '../model/User';
import {setPassword, setBio} from '../redux/slices/userSlice';
import sharedStyles from '../styles/shared';

const EditProfile: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const {userValues} = useContext(Context);
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [bioText, setBioText] = useState(userValues!.bio);

  const handleChangePassword = () => {
    const response = isValidNewPassword(
      userValues!.password,
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
          email: userValues!.email,
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

  const handleChangeBio = () => {
    dispatch(
      setBio({
        userId: userValues!.id,
        bio: bioText,
      }),
    );

    ToastAndroid.showWithGravityAndOffset(
      'Bio updated',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      200,
    );
  };

  const dispatch = useDispatch();
  return (
    <View style={[sharedStyles.flex1Container]}>
      <View style={[{margin: 10}]}>
        <Text style={[sharedStyles.mediumText]}>Change bio</Text>
        <TextInput
          style={[sharedStyles.textInput, sharedStyles.blackText]}
          placeholder="Bio"
          placeholderTextColor={placeholderColor}
          onChangeText={text => setBioText(text)}
          value={bioText}
          multiline={true}
        />
        <TouchableOpacity
          onPress={handleChangeBio}
          style={[
            sharedStyles.button,
            sharedStyles.primaryButton,
            {marginTop: 10, width: 150},
          ]}>
          <View>
            <Text style={[sharedStyles.whiteText, sharedStyles.centeredText]}>
              CHANGE BIO
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Separator type={SeparatorType.WIDE} />
      <View style={[{margin: 10}]}>
        <Text style={[sharedStyles.mediumText, {marginBottom: 10}]}>
          Change password
        </Text>
        <TextInput
          style={[sharedStyles.textInput, sharedStyles.blackText]}
          placeholder="Current password"
          placeholderTextColor={placeholderColor}
          onChangeText={text => setCurrentPassword(text)}
          value={currentPassword}
        />
        {currentPasswordError ? (
          <Text style={[sharedStyles.errorText, {marginLeft: 10}]}>
            {currentPasswordError}
          </Text>
        ) : null}
        <TextInput
          style={[sharedStyles.textInput, sharedStyles.blackText]}
          placeholder="New password"
          placeholderTextColor={placeholderColor}
          onChangeText={text => setNewPassword(text)}
          value={newPassword}
        />
        {newPasswordError ? (
          <Text style={[sharedStyles.errorText, {marginLeft: 10}]}>
            {newPasswordError}
          </Text>
        ) : null}
        <TouchableOpacity
          onPress={handleChangePassword}
          style={[
            sharedStyles.button,
            sharedStyles.primaryButton,
            {marginTop: 20, width: 230},
          ]}>
          <View>
            <Text style={[sharedStyles.whiteText, sharedStyles.centeredText]}>
              CHANGE PASSWORD
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
