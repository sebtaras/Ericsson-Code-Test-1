import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {placeholderColor} from '../../constants';
import {Context} from '../../context';
import {setPassword} from '../redux/slices/userSlice';
import sharedStyles from '../styles/shared';

const EditProfile: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const {loggedInUser} = useContext(Context);

  const dispatch = useDispatch();
  return (
    <View style={[sharedStyles.flexCenteredContainer]}>
      <Text>Change password</Text>
      <TextInput
        style={[sharedStyles.textInput, sharedStyles.blackText]}
        placeholder="Current password"
        placeholderTextColor={placeholderColor}
        onChangeText={text => setCurrentPassword(text)}
        value={currentPassword}
      />
      <TextInput
        style={[sharedStyles.textInput, sharedStyles.blackText]}
        placeholder="New password"
        placeholderTextColor={placeholderColor}
        onChangeText={text => setNewPassword(text)}
        value={newPassword}
      />
      <TouchableOpacity
        onPress={() =>
          dispatch(
            setPassword({
              email: loggedInUser?.email,
              currentPassword,
              newPassword,
            }),
          )
        }
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
