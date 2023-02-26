import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../../helpers/Responsiveness";
import ResponsiveText from "../../components/RnText";
import Icon from "../../components/Icon";
import { globalPath } from "../../constants/globalPath";
import { colors } from "../../constants/colorsPallet";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.grey,
            width: wp(80),
            borderWidth: 1,
            borderColor: colors.green1,
            borderRadius: 10,
          }}
        >
          <View style={{ alignItems: "center", marginTop: hp(-6) }}>
            <Icon size={wp(20)} source={globalPath.profileUser} />
          </View>
          <View style={{ margin: 20 }}>
            <ResponsiveText>Name</ResponsiveText>
            <ResponsiveText>Saniya Traiq</ResponsiveText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
