import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colorsPallet";
import ResponsiveText from "./RnText";
import Icon from "./Icon";
import { globalPath } from "../constants/globalPath";
import { hp, wp } from "../helpers/Responsiveness";

const CardView = ({ VIN, Year, Make, Modal, CarImage, created }) => {
  return (
    <View style={styles.carView}>
      <View style={{ flexDirection: "row", margin: 6 }}>
        <Icon
          borderRadius={10}
          resizeMode={"cover"}
          size={hp(15)}
          source={{ uri: CarImage }}
        />
        <View>
          <ResponsiveText margin={[5, 0, 0, 10]} weight={"bold"}>
            VIN
            <ResponsiveText color={colors.grey1}> {VIN}</ResponsiveText>
          </ResponsiveText>
          <ResponsiveText margin={[5, 0, 0, 10]} weight={"bold"}>
            Year
            <ResponsiveText color={colors.grey1} margin={[0, 0, 0, 0]}>
              {" "}
              {Year}
            </ResponsiveText>
          </ResponsiveText>
          <ResponsiveText margin={[5, 0, 0, 10]} weight={"bold"}>
            Make
            <ResponsiveText color={colors.grey1}> {Make}</ResponsiveText>
          </ResponsiveText>
          <ResponsiveText margin={[5, 0, 0, 10]} weight={"bold"}>
            Modal
            <ResponsiveText color={colors.grey1}> {Modal}</ResponsiveText>
          </ResponsiveText>
          <ResponsiveText margin={[5, 0, 0, 10]} weight={"bold"}>
            Created on
            <ResponsiveText color={colors.grey1}>{created}</ResponsiveText>
          </ResponsiveText>
        </View>
        <View style={{ marginLeft: wp(10) }}>
          <Icon
            size={18}
            // margin={[4, 0, 0, wp(10)]}
            source={globalPath.EditLogo}
          />
        </View>
      </View>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  carView: {
    backgroundColor: colors.grey,
    borderWidth: 1,
    borderColor: colors.green1,
    margin: 10,
    // alignItems: "center",
    borderRadius: 10,
  },
});
