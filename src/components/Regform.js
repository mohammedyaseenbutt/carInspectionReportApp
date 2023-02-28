import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../helpers/Responsiveness";
import { colors } from "../constants/colorsPallet";
import FormInput from "./FormInput";
import ResponsiveText from "./RnText";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "./Icon";
import { globalPath } from "../constants/globalPath";
import MaskInput from "react-native-mask-input";
import CheckBox from "./CheckBox";
import { FrontMaintenance_Data } from "../constants/mock";
import RnButton from "./RnButton";
import { routeName } from "../constants/routeName";
import Header from "./Header";

const Regform = ({ navigation }) => {
  const [VIN, setVIN] = useState("");
  const [License, setLicense] = useState("");
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [Mileage, setMealage] = useState("");
  const [Year, setYear] = useState("");
  const [ErrorString, setErrorString] = useState("");
  const [InfoExpand, setInfoExpand] = useState(true);
  const [CheckedDate, setCheckedDate] = useState("");
  const [Owner, setOwner] = useState("");
  const [DriveTrain, setDriveTrain] = useState("");
  const [Color, setColor] = useState("");
  const [KeySets, setKeySets] = useState("");
  const [TechnicianChecked, setTechnicianChecked] = useState("");
  const [maskFocus, setmaskFocus] = useState(false);
  const [reRender, setreRender] = useState(false);

  const [FrontMaintenance, setFrontMaintenance] = useState(true);
  const [Selected_FM_Data, setSelected_FM_Data] = useState([]);
  const Validations = () => {
    setErrorString("");
    if (VIN == "" && License == "" && Make == "") {
      setErrorString("Required");
    }
  };
  const Date_Mask = [/\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
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
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      {/* <Header back /> */}
      <View style={{ marginTop: hp(2) }}>
        <ResponsiveText
          size={4}
          color={colors.green1}
          textAlign={"center"}
          weight={"bold"}
        >
          COMPLETE VEHICLE CHECKLIST
        </ResponsiveText>
        <ResponsiveText size={3} color={colors.grey1} textAlign={"center"}>
          Fill all necessary fields to move toward next step
        </ResponsiveText>
      </View>
      <ScrollView keyboardShouldPersistTaps={"handled"} style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={{ marginTop: 10 }}>
            <FormInput
              titleWeight={"bold"}
              onChangeText={(text) => setVIN(text)}
              value={VIN}
              titlemargin={[0, 0, 0, 10]}
              title={"Full VIN"}
              placeholder={"Enter vehicle identification number"}
              errorString={ErrorString}
            />
            <FormInput
              titleWeight={"bold"}
              value={License}
              titlemargin={[0, 0, 0, 10]}
              title={"License"}
              onChangeText={(text) => setLicense(text)}
              placeholder={"Enter License"}
              errorString={ErrorString}
            />

            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
              <FormInput
                ViewWidth={wp(44)}
                value={Make}
                onChangeText={(text) => setMake(text)}
                InputWidth={wp(39)}
                titlemargin={[0, 0, 0, 3]}
                titleWeight={"bold"}
                title={"Make"}
                placeholder={"Enter make"}
                errorString={ErrorString}
              />
              <FormInput
                ViewWidth={wp(44)}
                InputWidth={wp(40)}
                value={Model}
                titlemargin={[0, 0, 0, 2]}
                onChangeText={(text) => setModel(text)}
                titleWeight={"bold"}
                title={"Model"}
                placeholder={"Enter model"}
                errorString={ErrorString}
              />
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
              <FormInput
                ViewWidth={wp(44)}
                InputWidth={wp(40)}
                value={Year}
                titlemargin={[0, 0, 0, 2]}
                onChangeText={(text) => setYear(text)}
                titleWeight={"bold"}
                title={"Year"}
                placeholder={"Enter Year"}
                errorString={ErrorString}
              />
              <FormInput
                ViewWidth={wp(44)}
                value={Mileage}
                onChangeText={(text) => setMealage(text)}
                InputWidth={wp(39)}
                titlemargin={[0, 0, 0, 3]}
                titleWeight={"bold"}
                title={"Mileage"}
                placeholder={"Enter mileage"}
                errorString={ErrorString}
              />
            </View>

            <TouchableOpacity
              onPress={() => setInfoExpand(!InfoExpand)}
              style={{
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
              }}
            >
              <ResponsiveText size={2.7} weight={"bold"} color={colors.white}>
                Add vehicle maintaince information
              </ResponsiveText>
              <Icon
                margin={[3, 20, 0, 0]}
                size={wp(4)}
                tintColor={colors.white}
                source={InfoExpand ? globalPath.DownArrow : globalPath.UpArrow}
              />
            </TouchableOpacity>
            {InfoExpand ? (
              <>
                <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                  <FormInput
                    ViewWidth={wp(44)}
                    InputWidth={wp(40)}
                    value={KeySets}
                    titlemargin={[0, 0, 0, 2]}
                    onChangeText={(text) => setKeySets(text)}
                    titleWeight={"bold"}
                    title={"Key Sets"}
                    placeholder={"Add Key sets"}
                    errorString={ErrorString}
                  />
                  <FormInput
                    ViewWidth={wp(44)}
                    value={Color}
                    onChangeText={(text) => setColor(text)}
                    InputWidth={wp(39)}
                    titlemargin={[0, 0, 0, 3]}
                    titleWeight={"bold"}
                    title={"color"}
                    placeholder={"Enter color"}
                    errorString={ErrorString}
                  />
                </View>
                <FormInput
                  titleWeight={"bold"}
                  onChangeText={(text) => setOwner(text)}
                  value={Owner}
                  titlemargin={[0, 0, 0, 10]}
                  title={"Owner"}
                  placeholder={"Enter owner name"}
                  errorString={ErrorString}
                />
                <FormInput
                  titleWeight={"bold"}
                  value={DriveTrain}
                  titlemargin={[0, 0, 0, 10]}
                  title={"Drive Train"}
                  onChangeText={(text) => setDriveTrain(text)}
                  placeholder={"Enter drive train"}
                  errorString={ErrorString}
                />

                <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                  <FormInput
                    ViewWidth={wp(44)}
                    InputWidth={wp(40)}
                    value={TechnicianChecked}
                    titlemargin={[0, 0, 0, 2]}
                    onChangeText={(text) => setTechnicianChecked(text)}
                    titleWeight={"bold"}
                    title={"Technician Checked"}
                    placeholder={"Technician "}
                    errorString={ErrorString}
                  />
                  <View style={{ margin: 10 }}>
                    <ResponsiveText size={2.5} weight={"bold"}>
                      Checked date
                    </ResponsiveText>

                    <View
                      style={{
                        borderWidth: maskFocus ? 2 : wp(0.04),
                        borderColor: maskFocus ? colors.green1 : colors.black,
                        borderRadius: 3,
                        height: hp(5),
                        backgroundColor: colors.grey,
                        width: wp(44),
                        justifyContent: "center",
                        marginBottom: 0,
                      }}
                    >
                      <MaskInput
                        style={{ marginLeft: 5, fontSize: wp(2) }}
                        keyboardType={"number-pad"}
                        onFocus={() => setmaskFocus(true)}
                        onBlur={() => setmaskFocus(false)}
                        value={CheckedDate}
                        placeholder={"DD-MM-YYYY"}
                        maxLength={10}
                        placeholderTextColor={colors.grey1}
                        onChangeText={(masked, unmasked, obfuscated) => {
                          setCheckedDate(unmasked);
                          console.log(unmasked);
                        }}
                        mask={Date_Mask}
                      />
                    </View>
                  </View>
                </View>
              </>
            ) : undefined}
          </View>
          <View style={{ alignSelf: "center", marginTop: hp(5) }}>
            <RnButton
              backgroundColor={colors.green1}
              borderRadius={7}
              width={wp(50)}
              title={"Next"}
              onPress={() => navigation.navigate(routeName.REG_PIC_FORM)}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={{ height: hp(10), backgroundColor: "white" }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Regform;

const styles = StyleSheet.create({});
