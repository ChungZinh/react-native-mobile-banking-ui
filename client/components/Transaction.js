import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../theme";

const Transaction = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        borderTopColor: "#e3e3e3",
        borderTopWidth: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/icon/icon.png")} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{}}>successful transaction to ojaman,</Text>
          <Text>view and download the receipt</Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 12,
              color: COLORS.black,
              opacity: 0.4,
            }}
          >
            September {children}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Feather name="x" size={18} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
