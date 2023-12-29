import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../theme";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import InfoDetail from "../components/InfoDetail";
import { useNavigation } from "@react-navigation/native";
import Keyboard from "../components/Keyboard";

const TransferDetailScreen = ({ activeU }) => {
  const navigation = useNavigation();
  const [number, setNumber] = useState("$");
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bacground }}>
      <StatusBar />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <View style={{ paddingHorizontal: 15 }}>
          {/* HEADER */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: COLORS.bacground2,
                width: 25,
                height: 25,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <AntDesign
                style={{}}
                name="arrowleft"
                size={20}
                color={COLORS.bacground}
              />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                color: COLORS.bacground2,
                fontWeight: "600",
              }}
            >
              Transfer
            </Text>
            <Text style={{ opacity: 0 }}>----</Text>
          </View>

          {/* CARD */}

          <InfoDetail item={activeU} number={number} setNumber={setNumber} />
        </View>
        {/* KEYBOARD */}
        <View
          style={{
            backgroundColor: COLORS.bacground2,
            paddingHorizontal: 15,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingBottom: 30,
            position: 'relative'
          }}
        >
          <Keyboard num={num} number={number} setNumber={setNumber} />
        <View
          style={{ paddingHorizontal: 15, position: "absolute", bottom: 0 }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: COLORS.bacground2,
            }}
          ></View>
          <View></View>
        </View>
        </View>

      </SafeAreaView>
    </View>
  );
};

export default TransferDetailScreen;

const styles = StyleSheet.create({});
