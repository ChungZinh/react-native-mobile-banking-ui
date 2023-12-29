import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../theme";

const ButtonOption = ({ children, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.yellow,
          width: 50,
          height: 50,
          borderRadius: 20
        }}
      >
        {children[0]}
      </TouchableOpacity>
      <Text style={{color: COLORS.bacground2, opacity: .8, marginTop: 8, fontSize: 13, textAlign: 'center'}}>{children[1]}</Text>
    </View>
  );
};

export default ButtonOption;

const styles = StyleSheet.create({});
