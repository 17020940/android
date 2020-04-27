import React, {Component} from 'react';
import Test from './components/Main/Shop/Shop';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Shop from './components/Main/Shop/Shop';
import Message from './components/Message/Message'
import ChatView from './components/Message/ChatView'
import Search from './components/Search/Search'
import ProductView from './components/ProductView/ProductView'
const Stack = createStackNavigator();
export default class App extends Component {
  render(){
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Shop">
        <Stack.Screen name="Shop" component={Shop} options={{ headerShown:false}}/>
        <Stack.Screen name="Message" component={Message} options={{ headerShown:false}} />
        <Stack.Screen name="ChatView" component={ChatView} options={{ headerShown:false}}/>
        <Stack.Screen name="Search" component={Search} options={{ headerShown:false}}/>
        <Stack.Screen name="ProductView" component={ProductView} options={{ headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}
