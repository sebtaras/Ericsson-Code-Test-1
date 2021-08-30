import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Item} from '../model/Item';
import {Task} from '../model/Task';
import sharedStyles from '../styles/shared';

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    elevation: 3,
  },
});

const Checklist: React.FC<any> = ({route}) => {
  const task = route.params as Task;

  return (
    <View>
      <ScrollView>
        {task.checklist.map((item: Item, index) => {
          return (
            <View style={[styles.itemContainer]} key={index}>
              <Text>{item.text}</Text>
              <CheckBox value={item.complete}></CheckBox>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Checklist;
