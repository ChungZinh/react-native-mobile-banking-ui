import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../theme";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FingerprintScreen = () => {
  const navigation = useNavigation();
  const [skipActive, setSkipActive] = useState(false)
   return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.bacground2,
        paddingHorizontal: 15,
      }}
    >
      <StatusBar />
      <SafeAreaView>
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

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 30,
          }}
        >
          <View
            style={{
              width: 285,
              height: 285,
              borderWidth: 1,
              borderColor: "#B0D1C1",
              borderRadius: 285 / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 225,
                height: 225,
                borderWidth: 1,
                borderColor: "#61A383",
                borderRadius: 112.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 150,
                  height: 150,
                  borderWidth: 1,
                  borderColor: "#4D9773",
                  borderRadius: 75,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => setSkipActive(!skipActive)}
                  style={{
                    padding: 10,
                    backgroundColor: "#09703E",
                    borderRadius: "50%",
                  }}
                >
                  <Ionicons name="finger-print" size={50} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
          >
            Use Touch ID To
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Authorise Paymentts
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#b3b3b3",
              paddingHorizontal: 30,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Active touch ID so you don’t need to confirm your PIN every time you
            want to send money
          </Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              width: "80%",
              backgroundColor: COLORS.primary,
              paddingVertical: 20,
              borderRadius: "50%",
              marginVertical: 20
            }}
          >
            <Text style={{textAlign: 'center', color: COLORS.bacground2,fontWeight: '600'}}>FINISH</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "80%",
              backgroundColor: skipActive ? COLORS.primary : '#B0D1C1',
              paddingVertical: 20,
              borderRadius: "50%",
            }}
          >
            <Text style={{textAlign: 'center', color: COLORS.bacground2,fontWeight: '600'}}>SHIP</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FingerprintScreen;

const styles = StyleSheet.create({});
