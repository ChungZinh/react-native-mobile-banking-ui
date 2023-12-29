import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../theme";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import Heading from "../components/Heading";
import Heading2 from "../components/Heading2";
import Pin from "../components/Pin";
import Keyboard from "../components/Keyboard";
import { useNavigation } from "@react-navigation/native";

const SetPINScreen = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [pin,setPin] = useState('');
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.bacground2,
        paddingHorizontal: 15,
      }}
    >
      <StatusBar />
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: COLORS.black,
              width: 25,
              height: 25,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <AntDesign
              style={{ textAlign: "center" }}
              name="arrowleft"
              size={20}
              color="white"
            />
          </TouchableOpacity>

          <Heading style={{ fontSize: 30 }} text={"Set your Pin"} />

          <Heading2 text={"Your will get use this to login next time"} />

          <View style={{ padding: 30 }}>
            <Pin />
          </View>
        </View>

        <View>
          <Keyboard num={num} />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('Main')}
              style={{
                width: "90%",
                backgroundColor: COLORS.primary,
                paddingVertical: 18,
                borderRadius: "50%",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "600",
                }}
              >NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SetPINScreen;

const styles = StyleSheet.create({});
