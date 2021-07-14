import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import Login from '../../../scenes/Login';
import HeaderRight from "./HeaderRight";

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: "#aaaaaa" },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Login"
      component={Login}
      options={({ navigation }) => ({
        title: 'Login',
        headerStyle: {
          backgroundColor: '#00aad4',
          headerTintColor: 'white',
        },
       // headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle name="iTelix" />,
      })}
    />
    <Stack.Screen
      name="Register"
      component={Login}
      options={({ navigation }) => ({
        title: 'Register',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      
      options={({ navigation, route }) => ({
        title: 'Home',
        cardStyle: { backgroundColor: '#FFFFFF' },
        headerRight: () => <HeaderRight navigation={navigation} />,
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle messages="8" navigation={navigation}/>,
      })}
    />
  
    <Stack.Screen
      name="Message"
      component={Details}
      options={({ navigation, route }) => ({ 
        title: route.params && route.params.name && route.params.name,
        headerRight: () => <HeaderRight name={route.params.name} navigation={navigation} />,
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle name={route.params.name} navigation={navigation} />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)
