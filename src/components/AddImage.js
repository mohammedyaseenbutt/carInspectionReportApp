import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { colors } from "../constants/colorsPallet";
import { globalPath } from "../constants/globalPath";
import { wp, hp } from "../helpers/Responsiveness";
import Icon from "./Icon";
import ResponsiveText from "./RnText";
import ImagePicker from "react-native-image-crop-picker";

const AddImage = (props) => {
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 768,
      height: 1024,
      cropping: false,
    }).then((image) => {
      console.log(image);
      props.setImg(image);
    });
  };
  const takephotofromgallary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,

      cropping: true,
    }).then((image) => {
      console.log(image.cropRect);
      props.setImg(image);
    });
  };
  const toggel = () => {
    Alert.alert("Profile Image", "change profile Image", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Select from gallary",
        onPress: async () => {
          takephotofromgallary();
        },
      },
      {
        text: "Select from Camera",
        onPress: async () => {
          takePhotoFromCamera();
        },
      },
    ]);
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => toggel()}
        style={{
          alignSelf: "flex-end",
          position: "absolute",
          top: 7,
          right: -10,
          zIndex: 1,
        }}
      >
        <Icon size={25} source={globalPath.Camera} />
      </TouchableOpacity>
      <Image
        style={{
          borderRadius: 40,
          height: wp(20),
          width: wp(20),
          borderWidth: 1,
          borderColor: colors.grey2,
        }}
        resizeMode={"contain"}
        source={
          props.source == null ||
          props.source == "https://vanman.egreatminds.com/WebApi//" ||
          props.source == ""
            ? globalPath.User_Logo
            : {
                uri:
                  props.source.path == undefined
                    ? props.source
                    : props.source.path,
              }
        }
      />
    </>
  );
};
export default AddImage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
