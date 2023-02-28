import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { hp, wp } from "../helpers/Responsiveness";
import { colors } from "../constants/colorsPallet";
import ResponsiveText from "./RnText";
import { useState } from "react";

const FormInput = ({
  placeholder,
  errorString,
  title,
  titleWeight,
  titlemargin,
  InputWidth,
  onChangeText,
  value,
  Erromargin,
  ViewWidth,
}) => {
  const [InputFocus, setInputFocus] = useState(false);
  const focused = () => {
    setInputFocus(true);
  };
  return (
    <View style={{ margin: 10 }}>
      <ResponsiveText
        size={2.5}
        weight={titleWeight ? titleWeight : undefined}
        margin={titlemargin ? titlemargin : [0, 0, 0, 10]}
      >
        {title}
      </ResponsiveText>
      <View
        style={{
          borderWidth: InputFocus == true ? 2 : wp(0.04),
          borderColor: errorString
            ? colors.red
            : InputFocus == true
            ? colors.green1
            : colors.black,
          width: ViewWidth ? ViewWidth : wp(90),
          // height: hp(5),
          maxHeight: hp(16),
          backgroundColor: colors.grey,
          minHeight: hp(5),
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 5,
        }}
      >
        <TextInput
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder ? placeholder : undefined}
          placeholderTextColor={colors.grey1}
          multiline
          style={{
            width: InputWidth ? InputWidth : wp(85),
            marginLeft: 5,
            marginTop: 2,
            fontSize: wp(2),
            maxHeight: hp(20),
            minHeight: hp(4),
          }}
        />
      </View>
      <View
        style={{
          // backgroundColor: "red",
          position: "absolute",
          top: hp(7.3),
          right: Erromargin ? Erromargin : 10,
          alignSelf: "flex-end",
        }}
      >
        <ResponsiveText color={colors.red} margin={(0, 0, 0, 0)}>
          {errorString}
        </ResponsiveText>
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
