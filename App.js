
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/Landing/LandingScreen';
import Auth from './screens/authentication/Auth';


const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='authentication'>
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="authentication" component={Auth} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
