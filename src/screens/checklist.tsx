import CheckBox from '@react-native-community/checkbox';
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  Touchable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Item} from '../model/Item';
import {Task} from '../model/Task';
import sharedStyles from '../styles/shared';
import Dialog from 'react-native-dialog';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {
  addTaskItem,
  removeTaskItem,
  updateItemStatus,
} from '../redux/slices/taskSlice';
import {createNewItem} from '../functions/createNewItem';
import {Icon} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {primaryColor} from '../../constants';
import {Context} from '../../context';
import taskStyles from '../styles/tasksStyles';

const styles = StyleSheet.create({
  itemOptionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Checklist: React.FC<any> = ({route}) => {
  const taskId = route.params;
  const {loggedInUser} = useContext(Context);
  const task = useSelector((state: RootState) => {
    for (const task of state.tasks.tasks) {
      if (task.id === taskId) {
        return state.tasks.tasks[state.tasks.tasks.indexOf(task)];
      }
    }
  });
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [newItemText, setNewItemText] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={[sharedStyles.flex1Container, {marginTop: 5}]}>
      <View>
        <View>
          <Dialog.Container visible={isDialogVisible}>
            <Dialog.Title>Create a new task item</Dialog.Title>
            <Dialog.Input
              placeholder="Item text"
              onChangeText={text => setNewItemText(text)}
            />
            <Dialog.Button
              onPress={() => {
                setIsDialogVisible(false);
                setNewItemText('');
              }}
              label="Cancel"
            />
            <Dialog.Button
              onPress={() => {
                setIsDialogVisible(false);
                if (newItemText) {
                  dispatch(
                    addTaskItem({
                      taskId: taskId,
                      item: createNewItem(newItemText),
                    }),
                  );
                }
                setNewItemText('');
              }}
              label="ADD"
            />
          </Dialog.Container>
        </View>
        <ScrollView>
          {task?.checklist.map((item: Item, index) => {
            return (
              <View style={[taskStyles.itemContainer]} key={index}>
                <Text style={[sharedStyles.mediumText]}>{item.text}</Text>
                <View style={[styles.itemOptionsContainer]}>
                  <CheckBox
                    value={item.complete}
                    tintColors={{
                      true: primaryColor,
                      false: primaryColor,
                    }}
                    onValueChange={newValue =>
                      dispatch(
                        updateItemStatus({
                          complete: newValue,
                          itemId: item.id,
                          taskId: taskId,
                        }),
                      )
                    }></CheckBox>
                  <TouchableOpacity
                    style={{marginLeft: 20}}
                    onPress={() =>
                      dispatch(
                        removeTaskItem({
                          taskId: taskId,
                          itemId: item.id,
                        }),
                      )
                    }>
                    <FontAwesomeIcon icon={faTrash} color="black" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
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

export default Checklist;
