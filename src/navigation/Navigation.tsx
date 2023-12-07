import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailedScreen } from '../screens/DetailedScreen';
import { Screens } from '../enum/Screens';
import { Movies } from '../interfaces/movieInterfaces';

export type RouteStackParams = {
  [Screens.HOME]: undefined;
  [Screens.DETAILED_SCREEN]: Movies;
}

/* export type RouteStackParams = {
  Home: undefined;
  DetailedScreen: undefined;

} */

const Stack = createStackNavigator<RouteStackParams>();



export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}

    >
      <Stack.Screen name={Screens.HOME} component={HomeScreen} />
      <Stack.Screen name={Screens.DETAILED_SCREEN} component={DetailedScreen} />
    </Stack.Navigator>
  );
}
