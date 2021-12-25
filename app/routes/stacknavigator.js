import React from 'react'
import { createStackNavigator  } from '@react-navigation/stack';
import HomeScreen from "@screens/Home"
const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                backgroundColor: "#bb1e1e",                
            },                         
            headerTintColor: "white",
            headerBackTitle: "Back",
            }}
        >      
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            headerMode="screen"
            screenOptions={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: 'tomato' },
            }}
            options={{
              title: 'Home',              
            }}
          />
                  
        </Stack.Navigator>
    )
}

export default StackNavigator
