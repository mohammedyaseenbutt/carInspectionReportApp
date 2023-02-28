import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colorsPallet";
import ResponsiveText from "./RnText";
import Icon from "./Icon";
import { globalPath } from "../constants/globalPath";
import { hp, wp } from "../helpers/Responsiveness";
import { TouchableOpacity } from "react-native-gesture-handler";
import { routeName } from "../constants/routeName";

const CardView = ({ VIN, Year, Make, Modal, onPress, CarImage, created }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.carView}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon
          borderRadius={10}
          margin={[0, 15, 0, 15]}
          resizeMode={"cover"}
          size={hp(15)}
          source={{ uri: CarImage }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: wp(70),
          }}
        >
          <View>
            <ResponsiveText size={3} margin={[5, 0, 0, 10]} weight={"bold"}>
              VIN
              <ResponsiveText weight={"500"} color={colors.grey1} size={3}>
                {" "}
                {VIN}
              </ResponsiveText>
            </ResponsiveText>
            <ResponsiveText size={3} margin={[5, 0, 0, 10]} weight={"bold"}>
              Year
              <ResponsiveText
                size={3}
                weight={"500"}
                color={colors.grey1}
                margin={[0, 0, 0, 0]}
              >
                {" "}
                {Year}
              </ResponsiveText>
            </ResponsiveText>
            <ResponsiveText size={3} margin={[5, 0, 0, 10]} weight={"bold"}>
              Make
              <ResponsiveText weight={"500"} size={3} color={colors.grey1}>
                {" "}
                {Make}
              </ResponsiveText>
            </ResponsiveText>
            <ResponsiveText size={3} margin={[5, 0, 0, 10]} weight={"bold"}>
              Modal
              <ResponsiveText weight={"500"} size={3} color={colors.grey1}>
                {" "}
                {Modal}
              </ResponsiveText>
            </ResponsiveText>
            <ResponsiveText size={3} margin={[5, 0, 0, 10]} weight={"bold"}>
              Created on
              <ResponsiveText weight={"500"} size={3} color={colors.grey1}>
                {" "}
                {created}
              </ResponsiveText>
            </ResponsiveText>
          </View>
          <View style={{ marginTop: hp(1) }}>
            <Icon
              size={wp(4)}
              // margin={[10, 0, 0, wp(0)]}
              source={globalPath.EditLogo}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardView;

const styles = StyleSheet.create({
  carView: {
    backgroundColor: colors.grey,
    borderWidth: 1,
    borderColor: colors.green1,
    margin: 10,
    borderRadius: 10,
  },
});
