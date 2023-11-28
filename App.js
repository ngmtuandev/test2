import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import Screen3 from './src/Screen3';
import store from './src/store/store';
export default function App() {
    const Stack = createNativeStackNavigator()
    return ( 
        <Provider store={store}>
            <NavigationContainer>
            <Stack.Navigator initialRouteName='screen1'>
                <Stack.Screen name='screen1' component={Screen1}></Stack.Screen>
                <Stack.Screen name='screen2' component={Screen2}></Stack.Screen>
                <Stack.Screen name='screen3' component={Screen3}></Stack.Screen>
            </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});