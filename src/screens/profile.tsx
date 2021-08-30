import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Context} from '../../context';
import sharedStyles from '../styles/shared';

const ProfileScreen: React.FC = () => {
  const context = useContext(Context);

  return (
    <View style={[sharedStyles.flexContainer]}>
      <TouchableOpacity
        onPress={() => {
          context.setIsLoggedIn(false);
        }}
        style={[sharedStyles.button, sharedStyles.primaryButton]}>
        <View>
          <Text style={[sharedStyles.whiteText]}>LOG OUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
