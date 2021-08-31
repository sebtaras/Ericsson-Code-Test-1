import {StyleSheet} from 'react-native';
import {primaryColor} from '../../constants';

const taskStyles = StyleSheet.create({
  roundButton: {
    display: 'flex',
    backgroundColor: primaryColor,
    height: 60,
    width: 60,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
    margin: 0,
    padding: 0,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    backgroundColor: '#fefefe',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  taskContainer: {
    height: 100,
    backgroundColor: '#fefefe',
  },
});

export default taskStyles;
