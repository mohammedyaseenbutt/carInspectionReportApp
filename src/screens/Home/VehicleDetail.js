import {
  Image,
  ImageBackground,
  ScrollView,
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
import Header from "../../components/Header";
import DetailRow from "../../components/RawDetail";
import { CarInfo } from "../../constants/mock";
import RnButton from "../../components/RnButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const VehicleDetail = ({ route, navigation }) => {
  console.log("first", route.params);
  var data = route.params;
  return (
    <>
      <ImageBackground
        style={{
          flex: 1,
          height: hp(30),
          width: "100%",
          alignSelf: "center",
        }}
        resizeMode={"cover"}
        source={{ uri: data.uri }}
      >
        <View style={{ marginTop: hp(5) }}>
          <Header back backPress={() => navigation.goBack()} />
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 3,
          backgroundColor: "white",
          borderTopRightRadius: hp(2),
          borderTopLeftRadius: hp(2),
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: hp(3), backgroundColor: "white" }}>
            <ResponsiveText size={3} margin={[0, 0, 4, wp(6)]} weight={"bold"}>
              Vehicle information
            </ResponsiveText>
          </View>
          <View style={styles.card}>
            <DetailRow Name={"VIN"} Detail={data.VIN} />
            <DetailRow Name={"Year"} Detail={data.Year} />
            <DetailRow Name={"Make"} Detail={data.Make} />
            <DetailRow Name={"Model"} Detail={data.Modal} />
            <DetailRow Name={"Technician Checked"} Detail={"DL/EAS"} />
            <DetailRow Name={"Checked Date"} Detail={data.Created} />
          </View>
          <ResponsiveText
            size={3}
            margin={[hp(4), 0, 0, wp(6)]}
            weight={"bold"}
          >
            Vehicle Image
          </ResponsiveText>

          <ScrollView
            style={{ backgroundColor: "white", marginHorizontal: wp(4) }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                // marginTop: 10,
              }}
            >
              {CarInfo.map((item) => (
                <TouchableOpacity
                  // onPress={() => data.uri(item)}
                  style={{
                    height: hp(10),
                    width: wp(30),
                    margin: 10,
                    borderRadius: 4,
                  }}
                >
                  <Image
                    style={{
                      height: hp(10),
                      width: wp(30),
                      borderRadius: 4,
                    }}
                    source={{ uri: item.uri }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View
            style={{
              marginHorizontal: wp(6),
              marginTop: hp(1),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <ResponsiveText size={3} margin={[10, 0, 0, 4]} weight={"bold"}>
                Vehicle Report
              </ResponsiveText>
              <ResponsiveText
                size={2.4}
                color={colors.grey1}
                margin={[0, 0, 0, 4]}
              >
                Download complete checklist
              </ResponsiveText>
            </View>

            <RnButton
              width={wp(30)}
              titleSize={2.6}
              margin={[8, 0, 0, 0]}
              borderRadius={10}
              backgroundColor={colors.green1}
              title={"Download"}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default VehicleDetail;

const styles = StyleSheet.create({
  bactBtn: {
    // marginTop: hp(5),
    height: wp(7),
    marginLeft: wp(4),
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: wp(7),
    backgroundColor: colors.black,
  },
  card: {
    backgroundColor: colors.grey,
    width: wp(90),
    borderRadius: 3,
    alignSelf: "center",
    shadowColor: colors.grey1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});
