import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/colorsPallet";
import { hp, wp } from "../../helpers/Responsiveness";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../../components/Icon";
import { globalPath } from "../../constants/globalPath";
import { JobDetail } from "../../constants/mock";
import ResponsiveText from "../../components/RnText";
import CardView from "../../components/CardView";
import Header from "../../components/Header";
import { routeName } from "../../constants/routeName";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import RecordNotFound from "../../components/RecordnotFound";
// import CardView from "../../components/CardView";

const Home = ({ navigation }) => {
  const [searchText, setsearchText] = useState("");
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const filterData = () => {
    if (date != null) {
      var filter_Date = JobDetail.filter(
        (v) => v.Created == moment(date).format("DD-MM-YYYY")
      );
      console.log("filter_Date", filter_Date);

      return filter_Date;
    }
    if (searchText) {
      return JobDetail.filter(
        (item) =>
          item.VIN.toLowerCase().includes(searchText.toLowerCase()) ||
          item.Make.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return JobDetail;
    }
  };
  return (
    <SafeAreaView
      edges={["left", "right", "top"]}
      style={{ flex: 1, backgroundColor: colors.white }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ResponsiveText
          textAlign={"center"}
          margin={[0, 0, 0, wp(3)]}
          color={"black"}
        >
          Dashboard
        </ResponsiveText>
        <Icon
          margin={[0, wp(3), 0, wp(0)]}
          tintColor={colors.black}
          source={globalPath.notificationIcon}
        />
        {/* <Header notifitintColor={"white"} /> */}
      </View>

      <View
        style={{
          width: "100%",
          marginTop: 10,
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <View style={styles.searchBar}>
          <Icon
            size={wp(4)}
            tintColor={colors.grey1}
            source={globalPath.SearchLogo}
          />
          <TextInput
            value={searchText}
            onChangeText={(text) => setsearchText(text)}
            style={{
              width: wp(70),
              fontSize: wp(2.5),
              alignSelf: "center",
              justifyContent: "center",
            }}
            placeholder={"Search by Id and make.."}
            placeholderTextColor={colors.grey1}
          />
          {date == null ? (
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Icon
                size={wp(4)}
                tintColor={colors.green1}
                source={globalPath.calenderLogo}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setDate(null)}>
              <Icon tintColor={colors.green1} source={globalPath.CrossIcon} />
            </TouchableOpacity>
          )}

          <DatePicker
            modal
            open={open}
            date={date == null ? new Date() : date}
            mode={"date"}
            onConfirm={(date) => {
              setOpen(false);
              console.log("date", date);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        {date !== null ? (
          <ResponsiveText textAlign={"center"}>
            Selected date {"  "}
            <ResponsiveText weight={"bold"} color={colors.green1}>
              {moment(date).format("YYYY-MM-DD")}
            </ResponsiveText>
          </ResponsiveText>
        ) : undefined}
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        {filterData().length > 0 ? (
          filterData().map((item, index) => {
            return (
              <CardView
                onPress={() =>
                  navigation.navigate(routeName.Vehical_detail, item)
                }
                VIN={item.VIN}
                Year={item.Year}
                Make={item.Make}
                Modal={item.Modal}
                created={item.Created}
                CarImage={item.uri}
              />
            );
          })
        ) : (
          <RecordNotFound />
        )}
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
    marginTop: 0,
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
