import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DetailsScreen from './src/view/screens/DetailsScreen';
import Homescreen from './src/view/screens/Homescreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from './src/consts/colors';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
       <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <DetailsScreen/>
  );
}


