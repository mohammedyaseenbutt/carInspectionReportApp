import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colorsPallet";
import { hp, wp } from "../../helpers/Responsiveness";
import { TextInput } from "react-native-gesture-handler";
import Icon from "../../components/Icon";
import { globalPath } from "../../constants/globalPath";
import { JobDetail } from "../../constants/mock";
import ResponsiveText from "../../components/RnText";
import CardView from "../../components/CardView";
// import CardView from "../../components/CardView";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      {/* <View style={{ width: "100%", height: hp(5) }}>
        <Icon size={wp(40)} source={globalPath.AtoZLogo} />
      </View> */}
      <View style={styles.searchBar}>
        <Icon tintColor={colors.grey1} source={globalPath.SearchLogo} />
        <TextInput
          style={{
            width: wp(70),
            alignSelf: "center",
            justifyContent: "center",
          }}
          placeholder={"Search by Id and make.."}
          placeholderTextColor={colors.grey1}
        />
        <Icon tintColor={colors.green1} source={globalPath.calenderLogo} />
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          marginTop: 10,
          marginRight: 10,
        }}
      >
        <ResponsiveText margin={[3, 10, 0, 0]} weight={"bold"}>
          Add new Vehicle
        </ResponsiveText>
        <View
          style={{
            height: wp(7),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            width: wp(7),
            backgroundColor: colors.green1,
          }}
        >
          <Icon
            size={15}
            tintColor={colors.white}
            source={globalPath.AddLogo}
          />
        </View>
      </View> */}

      <ScrollView>
        {JobDetail.map((item, index) => {
          return (
            <CardView
              VIN={item.VIN}
              Year={item.Year}
              Make={item.Make}
              Modal={item.Modal}
              created={item.Created}
              CarImage={item.uri}
            />
          );
        })}
        <View style={{ height: hp(10), backgroundColor: "white" }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchBar: {
    width: wp(90),
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: hp(5),
    backgroundColor: colors.grey,
    flexDirection: "row",
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: colors.black,
  },
});
