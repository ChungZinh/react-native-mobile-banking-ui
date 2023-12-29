import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import ButtonOption from "./ButtonOption";
import { useNavigation } from "@react-navigation/native";
const Card = () => {
  const [off, setOff] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={{ position: "relative", paddingHorizontal: 15 }}>
      <View
        style={{
          width: "100%",
          height: 240,
          padding: 15,
          backgroundColor: "#f6f6f6",
          borderWidth: 1,
          opacity: 0.15,
          borderColor: "#ffffff",
          borderRadius: 20,
          position: "relative",
          marginTop: 25,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          padding: 15,
          marginTop: 25,
          width: "100%",
          height: 240,
          marginLeft: 15
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{opacity: 0}}>----</Text>
          <Text style={{ color: COLORS.bacground2, opacity: 0.5, textAlign: 'center' }}>
            Total Balance
          </Text>
          <TouchableOpacity onPress={() => setOff(!off)}>
            <Ionicons
              style={{ color: COLORS.bacground2, opacity: 0.5 }}
              name="eye-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
            color: "#ffffff",
            opacity: 1,
          }}
        >
          {off ? "$450,49" : "******"}
        </Text>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 3,
              borderRadius: "50%",
              backgroundColor: "#d3d3d3",
              marginTop: 8,
            }}
          >
            <Text style={{ color: COLORS.bacground2, fontSize: 10 }}>USD</Text>
            <AntDesign name="down" size={10} color={COLORS.bacground2} />
          </Pressable>
        </View>

        <View
          style={{
            justifyContent: "center",
            height: 1,
            backgroundColor: COLORS.bacground2,
            marginTop: 20,
            opacity: 0.2,
          }}
        ></View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <ButtonOption onPress={()=>navigation.navigate('Transfer')} >
            <View
              style={{
                padding: 3,
                backgroundColor: COLORS.bacground,
                borderRadius: 4,
              }}
            >
              <AntDesign name="arrowright" size={14} color={COLORS.yellow} />
            </View>
            <Text>Transfer</Text>
          </ButtonOption>
          <ButtonOption>
            <Ionicons name="download" size={24} color={COLORS.bacground} />
            <Text>Top-up</Text>
          </ButtonOption>
          <ButtonOption>
            <Ionicons name="card" size={22} color={COLORS.primary} />
            <Text>Bill</Text>
          </ButtonOption>
          <ButtonOption onPress={()=>navigation.navigate('Menu')}>
            <AntDesign name="appstore1" size={22} color={COLORS.primary} />
            <Text>More</Text>
          </ButtonOption>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
