import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../constants/colorsPallet";
import { globalPath } from "../constants/globalPath";
import { wp, hp } from "../helpers/Responsiveness";
import Icon from "./Icon";

import ResponsiveText from "./RnText";
export default function CheckBox({
  text,
  onPress,
  checkedd,
  name,
  price,
  isActive,
}) {
  // const [checked, setChecked] = React.useState(checkedd ? checkedd : false);
  return (
    // <View style={{ flexDirection: "row" }}>
    <TouchableOpacity style={styles.listView} onPress={onPress}>
      <View
        style={{
          height: wp(3),
          width: wp(3),
          borderRadius: wp(0.6),
          backgroundColor: isActive ? colors.primary : colors.grey,
          borderWidth: isActive ? undefined : 2,
          borderColor: isActive ? undefined : colors.grey1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isActive ? (
          <Icon
            source={globalPath.check}
            size={wp(2)}
            tintColor={colors.white}
          />
        ) : (
          <View />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <ResponsiveText size={2.5} margin={[0, 0, 0, 25]}>
          {name}
        </ResponsiveText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  listView: {
    flexDirection: "row",
    backgroundColor: colors.white,
    width: wp(90),
    padding: 7,
    borderRadius: 10,
    marginTop: 0,
  },
});
