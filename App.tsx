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
import store, {persistor, RootState} from './src/redux/store';
import {Provider, useSelector} from 'react-redux';
import {User} from './src/model/User';
import EditProfile from './src/screens/profileEdit';
import {PersistGate} from 'redux-persist/integration/react';
import {useEffect} from 'react';
import {
  clearLoggedInUser,
  getLoggedInUser,
  storeLoggedInUser,
} from './storageFunctions';
import Loading from './src/components/loading';

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //TODO OVAJ USER VALUES SLAT KO PROPS UMJESTO CONTEXT
  const userValues = useSelector((state: RootState) => {
    if (loggedInUser == null) {
      return null;
    }
    for (const user of state.user.users) {
      if (user.id == loggedInUser?.id) {
        return state.user.users[state.user.users.indexOf(user)];
      }
    }
  });
  useEffect(() => {
    async function loadUser() {
      let result = await getLoggedInUser();
      console.log(result);
      if (result) {
        setLoggedInUser(result);
      }
      setIsLoading(false);
    }
    loadUser();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Context.Provider
        value={{
          loggedInUser,
          userValues,
          setLoggedInUser: (user: User | null) => setLoggedInUser(user),
          updateUserBio: async (bio: string) => {
            console.log('called');
            setLoggedInUser(user => {
              if (user) {
                const updatedUser = {...user, bio};
                storeLoggedInUser(updatedUser);
                return updatedUser;
              } else {
                return null;
              }
            });
          },
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
  }
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
