import React, { useEffect } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { colors } from "../constants/colorsPallet";
import { wp } from "../helpers/Responsiveness";
import ResponsiveText from "./RnText";

const DetailRow = (props) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          padding: 8,
          justifyContent: "space-between",
        }}
      >
        <ResponsiveText size={3} padding={[0, 0, 0, wp(5)]} weight={"bold"}>
          {props.Name}
        </ResponsiveText>
        <ResponsiveText
          margin={props.margin ? props.margin : undefined}
          flex={props.flex ? props.flex : undefined}
          color={colors.grey1}
          padding={[0, wp(1), 0, 0]}
          weight={"500"}
          size={3}
        >
          {props.Detail}
        </ResponsiveText>
      </View>
      <View
        style={{
          backgroundColor: colors.grey7,
          height: 1,
          width: wp(80),
          alignSelf: "center",
        }}
      ></View>
    </>
  );
};

const DetailRow1 = (props) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          padding: 8,
          justifyContent: "space-between",
        }}
      >
        <ResponsiveText
          color={props.color ? props.color : colors.black}
          flex={1}
          padding={[0, 0, 0, wp(5)]}
          weight={"bold"}
        >
          {props.Name}
        </ResponsiveText>
        {props.line ? (
          <>
            <ResponsiveText>|</ResponsiveText>

            <ResponsiveText
              margin={props.margin ? props.margin : undefined}
              //   flex={props.flex ? props.flex : undefined}
              flex={1}
              color={props.color1 ? props.color1 : colors.grey1}
              padding={[0, 0, 0, 0]}
              weight={"bold"}
            >
              {props.Detail}{" "}
              <ResponsiveText color={colors.grey1}>|</ResponsiveText>
            </ResponsiveText>
          </>
        ) : (
          <ResponsiveText
            margin={props.margin ? props.margin : undefined}
            //   flex={props.flex ? props.flex : undefined}
            flex={1}
            color={props.color2 ? props.color2 : colors.grey1}
            padding={[0, 0, 0, 0]}
            weight={"bold"}
          >
            {props.Detail}{" "}
          </ResponsiveText>
        )}
      </View>
      <View
        style={{
          backgroundColor: colors.grey7,
          height: 1,
          width: wp(80),
          alignSelf: "center",
        }}
      ></View>
    </>
  );
};
export { DetailRow, DetailRow1 };

export default DetailRow;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
