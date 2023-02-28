import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import { wp } from "../helpers/Responsiveness";
import { globalPath } from "../constants/globalPath";
import { colors } from "../constants/colorsPallet";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({
  back,
  navigation,
  logout,
  logoutPress,
  backPress,
  logouttintColor,
  notifitintColor,
}) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: back || logout ? "space-between" : "flex-end",
        // height: hp(5),
        // backgroundColor: "pink",
        alignItems: "center",
      }}
    >
      {back ? (
        <TouchableOpacity
          style={{
            height: wp(5),
            width: wp(5),
            marginLeft: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: wp(20),
            backgroundColor: colors.black,
          }}
          onPress={backPress}
        >
          <Icon
            margin={[0, 0, 0, 0]}
            size={wp(3)}
            tintColor={colors.white}
            source={globalPath.BackIcon}
          />
        </TouchableOpacity>
      ) : undefined}
      <Icon
        margin={[0, 10, 0, logout ? 10 : 0]}
        tintColor={notifitintColor ? notifitintColor : colors.black}
        size={wp(5)}
        source={globalPath.notificationIcon}
      />
      {logout ? (
        <TouchableOpacity
          // style={{
          //   height: wp(8),
          //   width: wp(8),
          //   marginRight: 10,
          //   alignItems: "center",
          //   justifyContent: "center",
          //   borderRadius: 30,
          //   backgroundColor: colors.black,
          // }}
          onPress={logoutPress}
        >
          <Icon
            margin={[0, 10, 0, 0]}
            size={wp(7)}
            tintColor={logouttintColor ? logouttintColor : colors.black}
            source={globalPath.LogoutIcon}
          />
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
