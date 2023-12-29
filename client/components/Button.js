import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../theme";

const Button = ({ text, setModalVisble, modalVisible }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => setModalVisble(!modalVisible)}
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
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
