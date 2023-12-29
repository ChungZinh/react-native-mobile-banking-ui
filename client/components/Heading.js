import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Heading = (props) => {
  return (
    <View>
      <Text
        style={[{
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 15,
        }]}
      >
        {props.text}
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({});
