import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title:'home',
        headerTitle:'Home'
      }}
      />
      <Stack.Screen
      name="Second"
      component={SecondScreen}
      options={{
        title: 'Second',
        headerTitle: 'Second'
      }}
      />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

