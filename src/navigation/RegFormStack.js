import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Regform from "../components/Regform";
import { routeName } from "../constants/routeName";
import Home from "../screens/Home/Home";
import RegPicFrom from "../screens/Home/RegPicFrom";
import RegForm1 from "../screens/Home/RegPicFrom";
// import Dashboard from "../screens/Home/Dashboard";

const Stack = createNativeStackNavigator();

function Reg_FormStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={routeName.Ref}
    >
      <Stack.Screen name={routeName.REG_FORM_DATA} component={Regform} />
      <Stack.Screen name={routeName.REG_PIC_FORM} component={RegPicFrom} />
    </Stack.Navigator>
  );
}

export default Reg_FormStack;
