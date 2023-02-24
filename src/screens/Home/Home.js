import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../constants/colorsPallet";
import Checkin from "../../components/Checkin";
import Api from "../../redux/lib/api";
import urls from "../../redux/lib/urls";
import Layout from "../../components/Layout";
import { globalPath } from "../../constants/globalPath";
import { wp } from "../../helpers/Responsiveness";
import ResponsiveText from "../../components/RnText";
import { routeName } from "../../constants/routeName";
import { _toast } from "../../constants/Index";
import { formatAMPM, getpresentTeam } from "../../redux/actions/user.actions";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import WifiManager from "react-native-wifi-reborn";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducers.presentTeam.data);
  const [CheckinTime, setCheckinTime] = useState("");
  const [userid, setUserid] = useState("");
  const [SSID, setSSID] = useState('')

  useEffect(() => {
    (async () => {
      var id = await AsyncStorage.getItem("@userId");
      // console.log("id", id);
      setUserid(Number(id));
    })();
    setCheckinTime(formatAMPM(new Date()));
    dispatch(getpresentTeam());
    if (Platform.OS == "android") {
      permissons();
    } else {
      getSSDid();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("Logs every minute");
      setCheckinTime(formatAMPM(new Date()));
    }, 60000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  const CheckedIn = async () => {
    var obj={
      CompanySSID:SSID
    }
    const res = await Api.post(urls.ADD_ATTENDENCE,obj);
    console.log("res", res);
    if (res && res.success == true) {
      // setData(res.data);
      dispatch(getpresentTeam());
      _toast("Checked In");
    } else {
    }
  };
  const CheckedOut = async () => {
    const res = await Api.post(urls.CHECKOUT);
    console.log("res", res);
    if (res && res.success == true) {
      // setData(res.data);
      dispatch(getpresentTeam());
      _toast("Checked Out");
    } else {
    }
  };
  const getSSDid = async () => {
    // WifiManager.connectToProtectedSSID('FabIntel', 'Fab1nt3l', false).then(
    //   () => {
    //     console.log("Connected successfully!");
    //   },
    //   () => {
    //     console.log("Connection failed!");
    //   }
    // );

    WifiManager.getCurrentWifiSSID().then(
      (ssid) => {
        console.log("Your current connected wifi SSID is " + ssid);
        setSSID(ssid)
      },
      () => {
        console.log("Cannot get current SSID!");
      }
    );
  };
  const permissons = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Location permission is required for WiFi connections",
        message:
          "This app needs location permission as this is required  " +
          "to scan for wifi networks.",
        buttonNegative: "DENY",
        buttonPositive: "ALLOW",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // You can now use react-native-wifi-reborn
      getSSDid();
    } else {
      _toast('Premission denied')
      // Permission denied
    }
  };
  return (
    <Layout title={"FabIntel Team"} address  location={globalPath.location} >
      <View style={{ marginTop: "20%" }}>
        <Checkin
          time={CheckinTime}
          onPress={() =>
            data.some((v) => v.userId == userid) ? CheckedOut() : CheckedIn()
          }
          data={data}
          userid={userid}
        />

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginTop: wp(10),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(routeName.APPLY_LATE)}
          >
            <ImageBackground source={globalPath.latebutton} style={styles.btn}>
              <ResponsiveText>Late</ResponsiveText>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(routeName.APPLYLEAVES)}
          >
            <ImageBackground source={globalPath.leavebutton} style={styles.btn}>
              <ResponsiveText>Apply Leave</ResponsiveText>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
  },
  btn: {
    height: wp(10),
    width: wp(30),
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
