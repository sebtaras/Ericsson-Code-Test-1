import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {placeholderColor, primaryColor} from '../../constants';
import {Context} from '../../context';
import {clearLoggedInUser} from '../../storageFunctions';
import {profileStyles} from '../styles/profileStyles';
import sharedStyles from '../styles/shared';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import Separator from '../components/separator';
import {RootState} from '../redux/store';
import {getUserValues} from '../functions/getUserValues';

const ProfileScreen: React.FC<any> = ({navigation}) => {
  const {setLoggedInUser, userValues} = useContext(Context);

  return (
    <View style={[sharedStyles.flex1Container]}>
      <View style={[sharedStyles.flexCenteredContainer, {marginBottom: 100}]}>
        <View>
          <Text style={[sharedStyles.largeText]}>
            {userValues?.email.toUpperCase()}
          </Text>
        </View>
        <Separator />
        <Text style={[sharedStyles.mediumText]}>BIO</Text>
        <View>
          <Text>{userValues?.bio}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setLoggedInUser(null);
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
        style={[profileStyles.editButton]}>
        <View style={[sharedStyles.flexContainerRow]}>
          <FontAwesomeIcon icon={faCog} size={20} color={primaryColor} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
