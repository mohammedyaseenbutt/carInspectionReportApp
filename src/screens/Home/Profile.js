import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../../helpers/Responsiveness";
import ResponsiveText from "../../components/RnText";
import Icon from "../../components/Icon";
import { globalPath } from "../../constants/globalPath";
import { colors } from "../../constants/colorsPallet";
import DetailRow from "../../components/RawDetail";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Header from "../../components/Header";
import { routeName } from "../../constants/routeName";
const Profile = ({ navigation }) => {
  return (
    <SafeAreaView
      edges={["left", "right", "top"]}
      style={{ flex: 1, backgroundColor: "black" }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Header
        notifitintColor={colors.white}
        logouttintColor={colors.white}
        logout
        logoutPress={() => navigation.replace(routeName.LOGIN)}
      />
      <View
        style={{
          // margin: 15,
          padding: 10,
          marginTop: hp(5),
          flexDirection: "row",
          borderBottomRightRadius: hp(10),
        }}
      >
        <Icon
          tintColor={colors.white}
          size={wp(20)}
          source={globalPath.userLogo}
        />
        <View>
          <ResponsiveText margin={[hp(2), 0, 0, 10]} color={colors.white}>
            Saniya Tariq
          </ResponsiveText>
          <ResponsiveText margin={[hp(0), 0, 0, 10]} color={colors.white}>
            saniyatariq@gmail.com
          </ResponsiveText>
        </View>
        <Icon
          margin={[hp(1), 0, 0, wp(23)]}
          tintColor={colors.white}
          size={wp(5)}
          source={globalPath.EditLogo}
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
