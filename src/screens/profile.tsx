import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {placeholderColor} from '../../constants';
import {Context} from '../../context';
import {clearLoggedInUser} from '../../storageFunctions';
import {profileStyles} from '../styles/profileStyles';
import sharedStyles from '../styles/shared';

const ProfileScreen: React.FC<any> = ({navigation}) => {
  const context = useContext(Context);
  const state = useSelector((state: any) => state.user);
  return (
    <View style={[sharedStyles.flex1Container]}>
      <Text>Welcome {context.loggedInUser?.email}</Text>
      <Text>BIO</Text>
      <Text>{context.loggedInUser?.bio}</Text>
      <TouchableOpacity
        onPress={() => {
          context.setLoggedInUser(null);
          clearLoggedInUser();
        }}
        style={[
          sharedStyles.button,
          sharedStyles.primaryButton,
          profileStyles.logOutButton,
        ]}>
        <View>
          <Text style={[sharedStyles.whiteText]}>LOG OUT</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Edit Profile');
        }}
        style={[sharedStyles.button, profileStyles.editButton]}>
        <View>
          <Text style={[sharedStyles.blackText]}>EDIT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
