import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Heading2 from "../components/Heading2";
import { COLORS } from "../theme";
import Card from "../components/Card";
import BottomSheet from "../components/BottomSheet";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.bacground,
      }}
    >
      <StatusBar style="light" />
      <SafeAreaView style={{flex: 1}}>

      {/* Info */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            justifyContent: "space-between",
            alignItems: 'center',
            paddingHorizontal: 15
          }}
        >
          <View>
            <Text style={{color: COLORS.bacground2, opacity: .5}}>Welcome</Text>
            <Text style={{color: COLORS.bacground2, fontSize: 20, fontWeight: '500', marginTop: 5}}>Mariana S.</Text>
          </View>
          <View style={{padding: 4, borderWidth: 1, borderColor: COLORS.bacground2, borderRadius: '50%', }}>
            <Image  source={require("../assets/img/user/profile.png")} />
          </View>
        </View>

          {/* Card */}


          <Card/>

          {/* Bottom Sheet */}

          <BottomSheet/>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
