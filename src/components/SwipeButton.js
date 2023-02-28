import React from "react";
import { StyleSheet, Text } from "react-native";
import SwipeButton from "rn-swipe-button";
import { colors } from "../constants/colorsPallet";
import { globalPath } from "../constants/globalPath";
import { hp, wp } from "../helpers/Responsiveness";
import Icon from "./Icon";
const Swipebtn = (props) => {
  const circle = () => {
    return (
      <Icon tintColor={"white"} size={30} source={globalPath.rightarrow} />
    );
  };
  return (
    <SwipeButton
      disabled={false}
      swipeSuccessThreshold={100}
      height={hp(6.5)}
      width={wp(80)}
      title="Swipe for Submit "
      onSwipeSuccess={
        // alert('submit Successfully');
        props.onSwipeSuccess
      }
      shouldResetAfterSuccess={true}
      railBackgroundColor={colors.grey1}
      // railBackgroundColor={colors.black}
      railFillBorderColor={colors.white}
      titleColor={colors.white}
      // titleColor={colors.black}
      // railFillBackgroundColor={colors.black}
      railFillBackgroundColor={colors.green1}
      thumbIconBackgroundColor={colors.black}
      thumbIconImageSource={globalPath.map}
      railBorderColor={colors.white}
      thumbIconBorderColor={colors.green1}
      thumbIconComponent={circle}
    ></SwipeButton>
  );
};
export default Swipebtn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  thumbIconImagestyle: {
    height: 20,
    width: 3,
  },
});
