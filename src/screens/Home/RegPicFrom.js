import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { routeName } from "../../constants/routeName";
import Icon from "../../components/Icon";
import { globalPath } from "../../constants/globalPath";
import { hp, wp } from "../../helpers/Responsiveness";
import { colors } from "../../constants/colorsPallet";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from "react-native-image-crop-picker";
import { useState } from "react";
import ResponsiveText from "../../components/RnText";
import FormInput from "../../components/FormInput";
import Swipebtn from "../../components/SwipeButton";
import HomeStack from "../../navigation/HomeStack";
import CheckBox from "../../components/CheckBox";
import {
  Engines_Maintaince,
  FrontMaintenance_Data,
  OutSide_Operations_Data,
  OutSide_Vehicle_Operations_Data,
  Under_Inspection,
  Under_Inspection_Data,
  under_the_hood,
} from "../../constants/mock";

const RegPicFrom = ({ navigation }) => {
  const [Img1, setImg1] = useState(null);
  const [Img2, setImg2] = useState(null);
  const [Img3, setImg3] = useState(null);
  const [Img4, setImg4] = useState(null);
  const [Img5, setImg5] = useState(null);
  const [Img6, setImg6] = useState(null);
  const [Img7, setImg7] = useState(null);
  const [focus, setfocus] = useState(null);
  const [refreshing, setrefreshing] = useState(false);
  const [instructions, setinstructions] = useState([
    {
      instr: "",
    },
  ]);
  const [reRender, setreRender] = useState(false);
  const [FrontMaintenance, setFrontMaintenance] = useState(true);
  const [Selected_FM_Data, setSelected_FM_Data] = useState([]);
  const [SelectedunderTheHood, setSelectedunderTheHood] = useState([]);
  const [underTheHood, setunderTheHood] = useState(true);
  const [under_Inspection, setunder_Inspection] = useState(true);
  const [selected_under_Inspection, setselected_under_Inspection] = useState(
    []
  );
  const [
    Seletected_outSide_Operationn_Data,
    setSeletected_outSide_Operationn_Data,
  ] = useState([]);
  const [outSideOperation, setoutSideOperation] = useState(true);
  // AddFrontMaintence_Data;
  const AddFrontMaintence_Data = (item) => {
    if (Selected_FM_Data.some((v) => v.id == item.id)) {
      var removeItem = Selected_FM_Data.filter((v) => v.id !== item.id);
      setSelected_FM_Data(removeItem);
      console.log("removeItem", removeItem);
    } else {
      Selected_FM_Data.push(item);
      setSelected_FM_Data(Selected_FM_Data);
    }
    setreRender(!reRender);
    console.log("selected FM Data", Selected_FM_Data);
  };
  // Add_Under_Inspection_Data
  const Add_Under_Inspection_Data = (item) => {
    if (selected_under_Inspection.some((v) => v.id == item.id)) {
      var removeItem = selected_under_Inspection.filter(
        (v) => v.id !== item.id
      );
      setselected_under_Inspection(removeItem);
      console.log("removeItem", removeItem);
    } else {
      selected_under_Inspection.push(item);
      setselected_under_Inspection(selected_under_Inspection);
    }
    setreRender(!reRender);
    console.log("selected FM Data", selected_under_Inspection);
  };
  // Add_Under_TheHood_Data;

  const Add_Under_TheHood_Data = (item) => {
    if (SelectedunderTheHood.some((v) => v.id == item.id)) {
      var removeItem = SelectedunderTheHood.filter((v) => v.id !== item.id);
      setSelectedunderTheHood(removeItem);
      console.log("removeItem", removeItem);
    } else {
      SelectedunderTheHood.push(item);
      setSelectedunderTheHood(SelectedunderTheHood);
    }
    setreRender(!reRender);
    console.log("selected FM Data", Selected_FM_Data);
  };
  // Add_OutSide_Operation
  const Add_OutSide_Operation = (item) => {
    if (Seletected_outSide_Operationn_Data.some((v) => v.id == item.id)) {
      var removeItem = Seletected_outSide_Operationn_Data.filter(
        (v) => v.id !== item.id
      );
      setSeletected_outSide_Operationn_Data(removeItem);
      console.log("removeItem", removeItem);
    } else {
      Seletected_outSide_Operationn_Data.push(item);
      setSeletected_outSide_Operationn_Data(SelectedunderTheHood);
    }
    setreRender(!reRender);
    console.log("selected FM Data", Selected_FM_Data);
  };
  var instructionsCounts = 0;
  // AddInstrcutions;
  const AddInstrcutions = () => {
    instructions.push({});
    setinstructions(instructions);
    console.log("stops", instructions);
    setrefreshing(!refreshing);
  };
  // Delete Instuctions;
  const DeleteInstr = (index) => {
    if (instructions.length > 1) {
      instructions.splice(index, 1);
      setinstructions(instructions);
      console.log("dja", instructions);
      setrefreshing(!refreshing);
    }
  };
  // confiirmation delete instructions
  const DELETE_Instruction = (index) => {
    Alert.alert("", "Do you want to remove instruction?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",

        onPress: () => {
          DeleteInstr(index);
        },
      },
    ]);
  };
  const takePhotoFromCamera = (item) => {
    console.log("item", item);
    ImagePicker.openCamera({
      width: 768,
      height: 1024,
      cropping: false,
    }).then((image) => {
      console.log(image);
      if (item == "1") {
        setImg1(image);
      } else if (item == "2") {
        setImg2(image);
      } else if (item == "3") {
        setImg3(image);
      } else if (item == "4") {
        setImg4(image);
      } else if (item == "5") {
        setImg5(image);
      } else if (item == "6") {
        setImg6(image);
      } else if (item == "7") {
        setImg7(image);
      }
    });
  };
  const takephotofromgallary = (item) => {
    console.log("item", item);

    ImagePicker.openPicker({
      width: 300,
      height: 400,

      cropping: true,
    }).then((image) => {
      console.log(image.cropRect);
      if (item == "1") {
        setImg1(image);
      } else if (item == "2") {
        setImg2(image);
      } else if (item == "3") {
        setImg3(image);
      } else if (item == "4") {
        setImg4(image);
      } else if (item == "5") {
        setImg5(image);
      } else if (item == "6") {
        setImg6(image);
      } else if (item == "7") {
        setImg7(image);
      }
    });
  };
  const toggel = (item) => {
    Alert.alert(" Image", "Add vehicle Image", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Select from gallary",
        onPress: async () => {
          takephotofromgallary(item);
        },
      },
      {
        text: "Select from Camera",
        onPress: async () => {
          takePhotoFromCamera(item);
        },
      },
    ]);
  };
  const successToggle = () => {
    Alert.alert("Vehicle add successfully");
    navigation.replace(routeName.BOTTOM_TABS);
  };
  const updateinstructions = (text, index) => {
    console.log("changetext", text, index);
    instructions[index].instr = text;
    console.log("text", instructions);
    setinstructions(instructions);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.white, alignItems: "center" }}
    >
      <Header back backPress={() => navigation.goBack()} />
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        style={{ flex: 1, marginTop: 10 }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
          {/* FrontMaintenance */}
          <TouchableOpacity
            onPress={() => setFrontMaintenance(!FrontMaintenance)}
            style={styles.downArrowbtn}
          >
            <ResponsiveText
              margin={[10, 0, 0, 0]}
              size={2.7}
              weight={"bold"}
              color={colors.white}
            >
              INSIDE VEHICLE OPERATIONS
            </ResponsiveText>
            <View style={styles.roundBtn}>
              <Icon
                size={wp(3)}
                tintColor={colors.white}
                source={
                  FrontMaintenance ? globalPath.DownArrow : globalPath.UpArrow
                }
              />
            </View>
          </TouchableOpacity>
          {FrontMaintenance ? (
            <>
              {FrontMaintenance_Data.map((item) => (
                <View style={{ marginHorizontal: 10 }}>
                  <CheckBox
                    isActive={
                      Selected_FM_Data.filter((v) => v.id == item.id).length > 0
                    }
                    onPress={() => AddFrontMaintence_Data(item)}
                    name={item.name}
                  />
                </View>
              ))}
            </>
          ) : undefined}
          {/* UNDER THE HOOD */}
          <TouchableOpacity
            onPress={() => setunderTheHood(!underTheHood)}
            style={styles.downArrowbtn}
          >
            <ResponsiveText
              margin={[10, 0, 0, 0]}
              size={2.7}
              weight={"bold"}
              color={colors.white}
            >
              UNDER THE HOOD
            </ResponsiveText>
            <View style={styles.roundBtn}>
              <Icon
                size={wp(3)}
                tintColor={colors.white}
                source={
                  under_the_hood ? globalPath.DownArrow : globalPath.UpArrow
                }
              />
            </View>
          </TouchableOpacity>
          {underTheHood ? (
            <>
              {under_the_hood.map((item) => (
                <View style={{ marginHorizontal: 10 }}>
                  <CheckBox
                    isActive={
                      SelectedunderTheHood.filter((v) => v.id == item.id)
                        .length > 0
                    }
                    onPress={() => Add_Under_TheHood_Data(item)}
                    name={item.name}
                  />
                </View>
              ))}
            </>
          ) : undefined}
          {/* OUTSIDE VEHICLE OPERATION */}
          <TouchableOpacity
            onPress={() => setoutSideOperation(!outSideOperation)}
            style={styles.downArrowbtn}
          >
            <ResponsiveText
              margin={[10, 0, 0, 0]}
              size={2.7}
              weight={"bold"}
              color={colors.white}
            >
              OUTSIDE VEHICLE OPERATION
            </ResponsiveText>
            <View style={styles.roundBtn}>
              <Icon
                size={wp(3)}
                tintColor={colors.white}
                source={
                  outSideOperation ? globalPath.DownArrow : globalPath.UpArrow
                }
              />
            </View>
          </TouchableOpacity>
          {outSideOperation ? (
            <>
              {OutSide_Operations_Data.map((item) => (
                <View style={{ marginHorizontal: 10 }}>
                  <CheckBox
                    isActive={
                      Seletected_outSide_Operationn_Data.filter(
                        (v) => v.id == item.id
                      ).length > 0
                    }
                    onPress={() => Add_OutSide_Operation(item)}
                    name={item.name}
                  />
                </View>
              ))}
            </>
          ) : undefined}
          {/* UNDER VEHICLE INSPECTION */}
          <TouchableOpacity
            onPress={() => setunder_Inspection(!under_Inspection)}
            style={styles.downArrowbtn}
          >
            <ResponsiveText
              margin={[10, 0, 0, 0]}
              size={2.7}
              weight={"bold"}
              color={colors.white}
            >
              UNDER VEHICLE INSPECTION
            </ResponsiveText>
            <View style={styles.roundBtn}>
              <Icon
                size={wp(3)}
                tintColor={colors.white}
                source={
                  under_Inspection ? globalPath.DownArrow : globalPath.UpArrow
                }
              />
            </View>
          </TouchableOpacity>
          {under_Inspection ? (
            <>
              {Under_Inspection_Data.map((item) => (
                <View style={{ marginHorizontal: 10 }}>
                  <CheckBox
                    isActive={
                      selected_under_Inspection.filter((v) => v.id == item.id)
                        .length > 0
                    }
                    onPress={() => Add_Under_Inspection_Data(item)}
                    name={item.name}
                  />
                </View>
              ))}
            </>
          ) : undefined}
          <ResponsiveText
            color={colors.green1}
            weight={"bold"}
            size={2.5}
            margin={[20, 0, 0, 20]}
          >
            Add Vehicle Images{" "}
            <ResponsiveText size={2} color={colors.grey1}>
              (required)
            </ResponsiveText>
          </ResponsiveText>
          <View style={{ margin: 10, marginTop: 20 }}>
            <View style={{ flexDirection: "row" }}>
              {/* pic 1 */}

              <TouchableOpacity
                onPress={() => toggel("1")}
                style={styles.img1View}
              >
                {Img1 ? (
                  <Image
                    style={{
                      height: hp(17),
                      width: wp(48),
                      borderRadius: 10,
                    }}
                    source={{ uri: Img1.path }}
                  />
                ) : (
                  <Icon size={40} source={globalPath.addphoto} />
                )}
              </TouchableOpacity>
              {/* pic 2 */}
              <View style={{ marginLeft: 15 }}>
                <TouchableOpacity
                  onPress={() => toggel("2")}
                  style={styles.img2View}
                >
                  {Img2 ? (
                    <Image
                      style={{
                        height: hp(8),

                        width: wp(40),
                        borderRadius: 10,
                      }}
                      source={{ uri: Img2.path }}
                    />
                  ) : (
                    <Icon size={20} source={globalPath.addphoto} />
                  )}
                </TouchableOpacity>
                {/* pic 3 */}
                <TouchableOpacity
                  onPress={() => toggel("3")}
                  style={[styles.img2View, { marginTop: 10 }]}
                >
                  {Img3 ? (
                    <Image
                      style={{
                        height: hp(8),

                        width: wp(40),
                        borderRadius: 10,
                      }}
                      source={{ uri: Img3.path }}
                    />
                  ) : (
                    <Icon size={20} source={globalPath.addphoto} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              {/* pic 4 */}
              <TouchableOpacity
                onPress={() => toggel("4")}
                style={styles.img4View}
              >
                {Img4 ? (
                  <Image
                    style={{
                      height: hp(8),
                      width: wp(20),
                      borderRadius: 10,
                    }}
                    source={{ uri: Img4.path }}
                  />
                ) : (
                  <Icon size={20} source={globalPath.addphoto} />
                )}
              </TouchableOpacity>
              {/* pic 5 */}
              <TouchableOpacity
                onPress={() => toggel("5")}
                style={styles.img4View}
              >
                {Img5 ? (
                  <Image
                    style={{
                      height: hp(8),
                      width: wp(20),
                      borderRadius: 10,
                    }}
                    source={{ uri: Img5.path }}
                  />
                ) : (
                  <Icon size={20} source={globalPath.addphoto} />
                )}
              </TouchableOpacity>
              {/* pic 6 */}
              <TouchableOpacity
                onPress={() => toggel("6")}
                style={styles.img4View}
              >
                {Img6 ? (
                  <Image
                    style={{
                      height: hp(8),
                      width: wp(20),
                      borderRadius: 10,
                    }}
                    source={{ uri: Img6.path }}
                  />
                ) : (
                  <Icon size={20} source={globalPath.addphoto} />
                )}
              </TouchableOpacity>
              {/* pic 7 */}
              <TouchableOpacity
                onPress={() => toggel("7")}
                style={styles.img4View}
              >
                {Img7 ? (
                  <Image
                    style={{
                      height: hp(8),
                      width: wp(20),
                      borderRadius: 10,
                    }}
                    source={{ uri: Img7.path }}
                  />
                ) : (
                  <Icon size={20} source={globalPath.addphoto} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            <ResponsiveText
              margin={[0, 0, 0, 20]}
              size={2.5}
              color={colors.green1}
              weight={"bold"}
            >
              {" "}
              Additional instructions{" "}
              <ResponsiveText size={2} color={colors.grey1}>
                (optional)
              </ResponsiveText>
            </ResponsiveText>
            <View>
              <>
                {instructions.map((item, index) => {
                  return (
                    <>
                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{
                            height: wp(6),
                            width: wp(6),
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 30,
                            margin: 10,
                            backgroundColor: colors.grey1,
                          }}
                        >
                          <ResponsiveText>
                            {(instructionsCounts = instructionsCounts + 1)}
                          </ResponsiveText>
                        </View>
                        <View
                          style={{
                            maxHeight: hp(30),
                            minHeight: hp(4),
                            borderWidth: focus == index ? 2 : 1,
                            borderRadius: 3,
                            alignItems: "center",
                            justifyContent: "center",
                            margin: 4,
                            borderColor:
                              focus == index ? colors.green1 : colors.grey1,
                            width: wp(75),
                          }}
                        >
                          <TextInput
                            style={{
                              maxHeight: hp(29),
                              minHeight: hp(3.5),
                              // marginLeft: 5,
                              fontSize: wp(3),
                              width: wp(70),

                              // backgroundColor: "red",
                            }}
                            onChangeText={(text) =>
                              updateinstructions(text, index)
                            }
                            multiline
                            onFocus={() => setfocus(index)}
                            onBlur={() => setfocus(null)}
                          />
                        </View>
                        {index == 0 ? (
                          <TouchableOpacity
                            onPress={() => AddInstrcutions()}
                            style={{ margin: 10 }}
                          >
                            <Icon source={globalPath.plusIcon} />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            onPress={() => DELETE_Instruction(index)}
                            style={{
                              marginTop: hp(1),
                              margin: 7,
                              backgroundColor: colors.red,
                              height: wp(7),
                              width: wp(7),
                              borderRadius: wp(30),
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon
                              tintColor={colors.white}
                              source={globalPath.CrossIcon}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    </>
                  );
                })}
              </>
            </View>
          </View>
          <View style={{ alignSelf: "center", marginTop: hp(3) }}>
            <Swipebtn onSwipeSuccess={() => successToggle()} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      <View style={{ height: hp(8), backgroundColor: "white" }}></View>
    </SafeAreaView>
  );
};

export default RegPicFrom;

const styles = StyleSheet.create({
  downArrowbtn: {
    backgroundColor: colors.grey1,
    width: wp(90),
    borderRadius: wp(1),
    alignSelf: "center",
    borderWidth: wp(0.05),
    margin: 10,
    borderColor: colors.black,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  roundBtn: {
    height: wp(6),
    width: wp(6),
    borderRadius: wp(20),
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "black",
  },
  img1View: {
    height: hp(18),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: wp(0.04),
    borderColor: colors.grey1,

    width: wp(50),
    borderRadius: 10,
  },
  img2View: {
    height: hp(8),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: wp(0.04),
    borderColor: colors.grey1,

    width: wp(40),
    borderRadius: 10,
  },
  img4View: {
    height: hp(8),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: wp(0.04),
    borderColor: colors.grey1,
    width: wp(20),
    marginTop: 10,
    borderRadius: 10,
  },
});
