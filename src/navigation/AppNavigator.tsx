import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import JobsList from '../screens/jobsList';
import JobDetail from '../screens/jobDetail';
import {NavigationContainer} from '@react-navigation/native';
import PostJob from '../screens/postJob';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JobsList">
        <Stack.Screen name="JobsList" component={JobsList} />
        <Stack.Screen name="JobDetail" component={JobDetail} />
        <Stack.Screen name="PostJob" component={PostJob} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
