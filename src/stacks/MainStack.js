import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { Preload } from "../screens/Preload";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

export function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Preload" component={Preload}/>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
  );
}