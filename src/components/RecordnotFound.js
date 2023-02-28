import React, { useEffect, version } from "react";
import { View } from "react-native";
import { hp, wp } from "../helpers/Responsiveness";
import Lottie from "lottie-react-native";

import ResponsiveText from "./RnText";
import { colors } from "../constants/colorsPallet";
import Icon from "./Icon";
import { globalPath } from "../constants/globalPath";
export default function RecordNotFound(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        alignSelf: "center",
        marginTop: props.marginTop ? props.marginTop : undefined,
      }}
    >
      <Lottie
        source={require("../assets/LottieFiles/Nodata.json")}
        style={{ width: wp(40) }}
        speed={1}
        autoPlay
        loop
      />
      <ResponsiveText color={colors.black} weight={"bold"}>
        {props.title ? props.title : " No data found"}
      </ResponsiveText>
    </View>
  );
}
