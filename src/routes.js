import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./pages/Home";
import ToDoList from "./pages/ToDo/List";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="List" component={ToDoList}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
