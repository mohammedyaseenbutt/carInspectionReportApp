import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { routeName } from "../constants/routeName";
import Home from "../screens/Home/Home";
// import Dashboard from "../screens/Home/Dashboard";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={routeName.DASHBOARD}
    >
      <Stack.Screen name={routeName.HOME} component={Home} />
    </Stack.Navigator>
  );
}

export default HomeStack;
