import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Platform,
  TextInput,
} from "react-native";
import { hp, wp } from "../../../helpers/Responsiveness";
import { colors } from "../../../constants/colorsPallet";
import { loginUser } from "../../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveText from "../../../components/RnText";
import DropDown from "../../../components/DropDown";
import Input from "../../../components/Input";
import { globalPath } from "../../../constants/globalPath";
import RnButton from "../../../components/RnButton";
import Api from "../../../redux/lib/api";
import urls from "../../../redux/lib/urls";
import Fonts from "../../../helpers/Fonts";
import Loader from "../../../components/loader";
import { routeName } from "../../../constants/routeName";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../../components/Icon";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
const Login = ({ navigation }) => {
  const [visible, setvisible] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={{ flex: 1 }}
        source={globalPath.loginBg}
      >
        <View style={{ alignSelf: "center", marginTop: hp(10) }}>
          <Icon size={hp(20)} source={globalPath.AtoZLogo} />
        </View>
        <View style={{ marginLeft: wp(10) }}>
          <View
            style={{
              width: wp(10),
              borderRadius: 30,
              height: hp(0.6),
              backgroundColor: colors.green9,
            }}
          ></View>
          <ResponsiveText size={10}>Sign In</ResponsiveText>
        </View>
        <View style={{ alignItems: "center", marginTop: hp(10) }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderBottomWidth: 0.7,
                width: wp(80),
                color: colors.grey1,
                flexDirection: "row",
              }}
            >
              <Icon
                tintColor={colors.black}
                margin={[0, 0, 10, 0]}
                source={globalPath.MailIcon}
              />

              <TextInput
                value={password}
                onChangeText={(text) => setpassword(text)}
                style={{
                  marginBottom: 10,
                  width: wp(75),
                  fontSize: wp(3),

                  marginLeft: 10,
                }}
                placeholder={"Email address"}
                placeholderTextColor={colors.grey1}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: hp(5) }}>
            <View
              style={{
                borderBottomWidth: 0.7,
                width: wp(80),
                color: colors.grey1,
                flexDirection: "row",
              }}
            >
              <Icon
                tintColor={colors.black}
                margin={[0, 0, 10, 0]}
                source={globalPath.PasswordIcon}
              />

              <TextInput
                value={email}
                onChangeText={(text) => setemail(text)}
                secureTextEntry={visible ? true : false}
                style={{
                  marginBottom: 10,
                  fontSize: wp(3),
                  width: wp(65),
                  marginLeft: 10,
                }}
                placeholder={"Password"}
                placeholderTextColor={colors.grey1}
              />
              <TouchableOpacity onPress={() => setvisible(!visible)}>
                <Icon
                  tintColor={colors.black}
                  margin={[0, 0, 10, 0]}
                  source={visible ? globalPath.eyeOff : globalPath.eyeOn}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: hp(5) }}>
            <RnButton
              width={wp(50)}
              backgroundColor={colors.green9}
              borderRadius={10}
              title={"Sign in"}
              onPress={() => navigation.replace(routeName.BOTTOM_TABS)}
            />
          </View>
          <View style={{ marginTop: hp(3) }}>
            <ResponsiveText size={3}>
              Need help?
              <ResponsiveText size={3} weight={"bold"}>
                {" "}
                Contact support
              </ResponsiveText>
            </ResponsiveText>
          </View>
          <View style={styles.footerContainer}>
            <ResponsiveText
              size={3}
              weight={"bold"}
              color={colors.black}
              fontFamily={Fonts.LightItalic}
            >
              Powered by{" "}
            </ResponsiveText>
            <Icon
              size={wp(15)}
              source={{
                uri: "https://stampasolutions.com/assets/images/Stampa-Solution-Logo.png",
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 10,
    marginTop: hp(4),
  },
  footer: {
    flex: 1,
    backgroundColor: colors.grey,
    // borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // alignItems: 'center'
    // marginTop:hp(0.5)
  },
  poweredLogo: {
    height: hp(15),
    width: wp(15),
    resizeMode: "contain",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screeninfo: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue1,
    borderBottomLeftRadius: 35,
  },
  logo: {
    height: hp(20),
    width: wp(40),
    resizeMode: "contain",
    // marginBottom: 20,
    alignItems: "center",
  },
});
