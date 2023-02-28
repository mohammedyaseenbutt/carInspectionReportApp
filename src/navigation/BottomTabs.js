import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRef } from "react";
import { globalPath } from "../constants/globalPath";
import { colors } from "../constants/colorsPallet";
import { hp, wp } from "../helpers/Responsiveness";
import HomeStack from "./HomeStack";
import Profile from "../screens/Home/Profile";
import Regform from "../components/Regform";
import Reg_FormStack from "./RegFormStack";
import Icon from "../components/Icon";

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function BottomTabs() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: colors.white,
          // activeWidth: wp(10),
          activeTintColor: colors.EV_black,
          inactiveTintColor: "transparent",
          tabStyle: {
            // backgroundColor: colors.red,
            // height: 75,
            // width: wp(80),
            // borderTopRightRadius: 20,
            // roborderTopLeftRadius: 20,
          },
        }}
        appearance={{
          horizontalPadding: 40,

          tabBarBackground: colors.EV_black,
        }}
        initialRouteName="HomeStack"
        style={{ marginHorizontal: 10 }}
        // sceneContainerStyle={{marginHorizontal:20,backgroundColor:'red'}}
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.red,
          tabBarInactiveTintColor: colors.white,

          // Floating Tab Bar...
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold",
          },
          tabBarStyle: {
            backgroundColor: colors.white,
            // height: Platform.OS == "ios" ? 78 : 55,
            height: hp(5),
            width: "100%",
            alignSelf: "center",
            shadowColor: colors.black,
            shadowOpacity: 0.1,
            shadowOffset: {
              width: 40,
              height: 90,
            },
            marginBottom: isKeyboardVisible ? -40 : 0,
            // paddingHorizontal: 20,
            // marginHorizontal: wp(8),
            position: "absolute",
            // justifyContent:'center',
            paddingTop: Platform.OS == "ios" ? 20 : 0,
          },
          //  }
        }}
      >
        <Tab.Screen
          name={"HomeStack"}
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.TouchableTab : {}}>
                <View style={focused ? styles.ActiveTab : styles.inActiveTab}>
                  <Icon
                    tintColor={focused ? colors.white : colors.black}
                    source={globalPath.dashboard}
                    resizeMode={"contain"}
                    size={wp(3)}
                  />
                </View>
              </View>
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name={"Reg_FormStack"}
          component={Reg_FormStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.TouchableTab : {}}>
                <View style={focused ? styles.ActiveTab : styles.inActiveTab}>
                  <Icon
                    source={globalPath.AddLogo}
                    resizeMode={"contain"}
                    size={wp(3)}
                    tintColor={focused ? colors.white : colors.black}
                  />
                </View>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"Profile"}
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.TouchableTab : {}}>
                <View style={focused ? styles.ActiveTab : styles.inActiveTab}>
                  <Icon
                    tintColor={focused ? colors.white : colors.black}
                    size={wp(3)}
                    source={globalPath.ProfileLogo}
                    resizeMode={"contain"}
                  />
                </View>
              </View>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ActiveTab: {
    width: 60,
    height: 60,
    backgroundColor: colors.black,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  inActiveTab: {},
  TouchableTab: {
    backgroundColor: colors.green1,
    padding: 2,
    width: 60,
    bottom: 20,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
  },
});
