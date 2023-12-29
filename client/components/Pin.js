import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../theme";

const Pin = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
      }}
    >
      <View
        style={{
          width: 48,
          height: 50,
          backgroundColor: COLORS.primary,
          borderRadius: 10,
        }}
      >
        <TextInput
          style={{
            textAlign: "center",
            fontSize: 40,
            color: "white",
          }}
          placeholderTextColor={"#fffb"}
          placeholder="-"
          maxLength={1}
          keyboardType="number-pad"
        />
      </View>
      <View
        style={{
          width: 48,
          height: 50,
          backgroundColor: COLORS.primary,
          borderRadius: 10,
        }}
      >
        <TextInput
          style={{
            textAlign: "center",
            fontSize: 40,
            color: "white",
          }}
          placeholderTextColor={"#fffb"}
          placeholder="-"
          maxLength={1}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View
        style={{
          width: 48,
          height: 50,
          backgroundColor: COLORS.primary,
          borderRadius: 10,
        }}
      >
        <TextInput
          style={{
            textAlign: "center",
            fontSize: 40,
            color: "white",
          }}
          placeholderTextColor={"#fffb"}
          placeholder="-"
          maxLength={1}
          keyboardType="number-pad"
        />
      </View>

      <View
        style={{
          width: 48,
          height: 50,
          backgroundColor: COLORS.primary,
          borderRadius: 10,
        }}
      >
        <TextInput
          style={{
            textAlign: "center",
            fontSize: 40,
            color: "white",
          }}
          placeholderTextColor={"#fffb"}
          placeholder="-"
          maxLength={1}
          keyboardType="number-pad"
        />
      </View>
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({});
