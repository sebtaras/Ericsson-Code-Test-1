import React, {useContext} from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/login';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './src/screens/profile';
import TasksScreen from './src/screens/tasks';
import LocationScreen from './src/screens/location';
import {Context} from './context';
import Checklist from './src/screens/checklist';
import store, {persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import {User} from './src/model/User';
import EditProfile from './src/screens/profileEdit';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createStackNavigator();

const HomeTabNavigator: React.FC = () => {
  const context = useContext(Context);
  return (
    <Tab.Navigator>
      {context.loggedInUser ? (
        <>
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Tasks" component={TasksScreen} />
          <Tab.Screen name="Location" component={LocationScreen} />
        </>
      ) : (
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarStyle: {display: 'none'},
          }}
        />
      )}
    </Tab.Navigator>
  );
};

const Tab = createMaterialTopTabNavigator();

const App: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<null | User>(null);

  return (
    <Context.Provider
      value={{
        loggedInUser,
        setLoggedInUser: (user: User | null) => setLoggedInUser(user),
      }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTabNavigator}
            options={{header: () => null}}
          />
          <Stack.Screen name="Checklist" component={Checklist} />
          <Stack.Screen name="Edit Profile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
export default AppWrapper;
