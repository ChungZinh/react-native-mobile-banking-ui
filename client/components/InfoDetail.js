import {
    Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { againTran } from "../data";

const InfoDetail = ({number, setNumber}) => {
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
          marginLeft: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ opacity: 0 }}>----</Text>
          <Text
            style={{
              color: COLORS.bacground2,
              opacity: 0.5,
              textAlign: "center",
            }}
          >
            Total Balance
          </Text>
          <TouchableOpacity>
            <Ionicons
              style={{ color: COLORS.bacground2, opacity: 0.5 }}
              name="eye-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <TextInput
          style={{
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
            color: "#ffffff",
            opacity: 1,
          }}
          value={number}
          onChangeText={(text)=>setNumber(text)}
          placeholder=""
          placeholderTextColor={'white'}
        />

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



        <View style={{flexDirection: 'row', alignItems: 'center',borderRadius: 10, marginTop: 15, borderWidth: 1, borderColor: COLORS.bacground2, padding: 10}}>
            <Image source={againTran[0].img}/>
            <View style={{marginLeft: 20}}>
                <Text style={{color:COLORS.bacground2, fontWeight: '500',fontSize: 16}}>{againTran[0].name}</Text>
                <Text style={{color: COLORS.bacground2, opacity: .5,fontSize: 10, marginTop: 10}}>Bank - {againTran[0].phone}</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

export default InfoDetail;

const styles = StyleSheet.create({});
