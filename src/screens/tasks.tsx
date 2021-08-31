import React from 'react';
import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Context} from '../../context';
import {tasks} from '../../tempData';
import {getHeight} from '../functions/getDimensions';
import sharedStyles from '../styles/shared';

const styles = StyleSheet.create({
  taskContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    padding: 20,
    marginBottom: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

const TasksScreen: React.FC<any> = ({navigation}) => {
  const {loggedInUser} = useContext(Context);

  return (
    <View style={{height: getHeight()}}>
      <ScrollView>
        {tasks.map((task, index) => {
          if (task.ownerId === loggedInUser?.id)
            return (
              <TouchableOpacity
                key={index.toString()}
                onPress={() => navigation.navigate('Checklist', task)}>
                <View style={[styles.taskContainer]}>
                  <Text style={[sharedStyles.mediumText]}>{task.name}</Text>
                </View>
              </TouchableOpacity>
            );
        })}
      </ScrollView>
    </View>
  );
};

export default TasksScreen;
