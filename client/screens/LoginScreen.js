import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  SlideAnimation,
} from "react-native-modals";
import { useNavigation } from "@react-navigation/native";
import Heading from "../components/Heading";
import Pin from "../components/Pin";
import Heading2 from "../components/Heading2";
import Keyboard from "../components/Keyboard";
import Button from "../components/Button";
const LoginScreen = () => {
  const [number, setNumber] = useState("");
  const [modalVisible, setModalVisble] = useState(false);
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const navigation = useNavigation();
  const [end, setEnd] = useState();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.bacground2,
          paddingHorizontal: 15,
        }}
      >
        <StatusBar />
        <SafeAreaView style={{ justifyContent: "space-between", flex: 1 }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  T
                </Text>
              </View>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                TAOBank
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 25 }}>
                Welcome
              </Text>
              <Text
                style={{ color: COLORS.black, opacity: 0.5, marginTop: 15 }}
              >
                Enter your mobile number for Continue
              </Text>
            </View>

            <View style={{ marginTop: 40 }}>
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "20%",
                    paddingBottom: 15,
                    borderBottomWidth: 2,
                    borderBottomColor: COLORS.primary,
                    justifyContent: "space-around",
                    opacity: number.length > 0 ? 0.3 : 1,
                  }}
                >
                  <Text>+84</Text>
                  <AntDesign name="down" size={18} color="black" />
                </View>
                <View
                  style={{
                    width: "77%",
                    paddingBottom: 11.5,
                    borderBottomWidth: 2,
                    borderBottomColor: COLORS.primary,
                  }}
                >
                  <TextInput
                    style={{
                      fontSize: 18,
                      letterSpacing: 1,
                      color: COLORS.black,
                      opacity: 0.6,
                    }}
                    value={number}
                    placeholder="xxx-xxx-xxx"
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <Keyboard num={num} number={number} setNumber={setNumber}/>

            <Button setModalVisble={setModalVisble} modalVisible={modalVisible} text={'NEXT'}/>
          </View>
        </SafeAreaView>
        <BottomModal
          onHardwareBackPress={() => setModalVisble(!modalVisible)}
          swipeDirection={["up", "down"]}
          swipeThreshold={200}
          modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
          visible={modalVisible}
          onTouchOutside={() => setModalVisble(!modalVisible)}
          modalStyle={{ borderRadius: 30, position: "relative" }}
        >
          <ModalContent>
            <View style={{ paddingHorizontal: 30 }}>
              <Heading text={"Verification Code"}></Heading>
              <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <Heading2
                  text={
                    "We have sent the code verification to your mobile number."
                  }
                />
                <Text style={{ color: "#61A383" }}>Wrong number ?</Text>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Pressable
                  onPress={() => {
                    navigation.navigate("SetPIN");
                    setModalVisble(false);
                  }}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                    textAlign: "center",
                    borderRadius: "50%",
                    backgroundColor: COLORS.primary,
                  }}
                >
                  <Text style={{ color: "white" }}>+84{number}</Text>
                </Pressable>
              </View>

              <Pin />

              <Text
                style={{
                  textAlign: "center",
                  marginTop: 25,
                  fontSize: 13,
                  color: COLORS.black,
                  opacity: 0.5,
                  marginBottom: 180,
                }}
              >
                Resend Code in 00:29
              </Text>
            </View>
          </ModalContent>
        </BottomModal>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
