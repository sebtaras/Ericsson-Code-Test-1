import React, {useState} from 'react';
import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Context} from '../../context';
import {getHeight} from '../functions/getDimensions';
import {RootState} from '../redux/store';
import sharedStyles from '../styles/shared';
import taskStyles from '../styles/tasksStyles';
import Dialog from 'react-native-dialog';
import {addTask, removeTask, removeTaskItem} from '../redux/slices/taskSlice';
import {createNewItem} from '../functions/createNewItem';
import {createNewTask} from '../functions/createNewTask';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const TasksScreen: React.FC<any> = ({navigation}) => {
  const state = useSelector((state: RootState) => state.tasks);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const {userValues} = useContext(Context);
  const dispatch = useDispatch();
  return (
    <View style={[sharedStyles.flex1Container, {marginTop: 5}]}>
      <View>
        <View>
          <Dialog.Container visible={isDialogVisible}>
            <Dialog.Title>Create a new task</Dialog.Title>
            <Dialog.Input
              placeholder="Task name"
              onChangeText={text => setNewTaskName(text)}
            />
            <Dialog.Button
              onPress={() => {
                setIsDialogVisible(false);
                setNewTaskName('');
              }}
              label="Cancel"
            />
            <Dialog.Button
              onPress={() => {
                setIsDialogVisible(false);
                setNewTaskName('');
                dispatch(
                  addTask({
                    task: createNewTask(newTaskName, userValues!.id),
                  }),
                );
              }}
              label="ADD"
            />
          </Dialog.Container>
        </View>
        <ScrollView>
          {state.tasks.map((task, index) => {
            if (task.ownerId === userValues?.id)
              return (
                <TouchableOpacity
                  style={[taskStyles.itemContainer, taskStyles.taskContainer]}
                  key={index}
                  onPress={() => navigation.navigate('Checklist', task.id)}>
                  <Text style={[sharedStyles.mediumText]}>{task.name}</Text>
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() =>
                      dispatch(
                        removeTask({
                          taskId: task.id,
                        }),
                      )
                    }>
                    <FontAwesomeIcon icon={faTrash} color="black" size={20} />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={[taskStyles.roundButton]}
        onPress={() => setIsDialogVisible(true)}>
        <Text
          style={[
            sharedStyles.mediumText,
            sharedStyles.whiteText,
            sharedStyles.centeredText,
            ,
            {marginBottom: 2},
          ]}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TasksScreen;
