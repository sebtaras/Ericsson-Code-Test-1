/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useContext} from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/login';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './src/screens/profile';
import TasksScreen from './src/screens/tasks';
import LocationScreen from './src/screens/location';
import {Context} from './context';
import Checklist from './src/screens/checklist';

const Stack = createStackNavigator();

const HomeTabNavigator: React.FC = () => {
  const context = useContext(Context);
  return (
    <Tab.Navigator>
      {context.isLoggedIn ? (
        <>
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Location" component={LocationScreen} />
          <Tab.Screen name="Tasks" component={TasksScreen} />
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn: (value: boolean) => setIsLoggedIn(value),
      }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTabNavigator}
            options={{header: () => null}}
          />
          <Stack.Screen name="Checklist" component={Checklist} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;
