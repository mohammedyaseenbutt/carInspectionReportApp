import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { routeName } from "../constants/routeName";
import Home from "../screens/Home/Home";
import VehicleDetail from "../screens/Home/VehicleDetail";
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
      <Stack.Screen name={routeName.Vehical_detail} component={VehicleDetail} />
    </Stack.Navigator>
  );
}

export default HomeStack;
