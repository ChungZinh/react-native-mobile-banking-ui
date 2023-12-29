import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#106048", position: "relative" }}>
      <StatusBar />
      <SafeAreaView>
        <Image
          style={{ position: "absolute" }}
          source={require("../assets/img/ornament.png")}
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/img/wallet.png")} />
        </View>

        <View
          style={{
            backgroundColor: "#F6F6F6",
            padding: 15,
            margin: 15,
            borderRadius: 20,
            alignItems: 'center'
          }}
        >
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
          >
            Start Payments Easily
          </Text>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", marginVertical: 6 }}
          >
            In The Digital Age
          </Text>
          <Text style={{color: '#b3b3b3', paddingHorizontal: 30, textAlign: 'center'}}>
            Payment tool that is easy and fast to use in this easy-to-use
            digital era. Use the features that make your business easier
          </Text>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Fingerprint')}
           style={{padding: 10, backgroundColor: COLORS.primary, borderRadius: '50%', marginTop: 20}}>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
