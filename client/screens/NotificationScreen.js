import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../theme/index";
import Transaction from "../components/Transaction";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bacground2 }}>
      <StatusBar />
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 25,
          }}
        >
          Notification
        </Text>

        {/* TRANSACTION */}
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              width: "100%",
              padding: 20,
              backgroundColor: "#ffffff",
              borderRadius: 20,
              shadowColor: "#b3b3b3",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.2,
              shadowRadius: 6,
            }}
          >
            <Text
              style={{
                marginBottom: 15,
                fontSize: 16,
                color: COLORS.black,
                opacity: 0.3,
              }}
            >
              Transaction
            </Text>
            <View>
              <Transaction>4</Transaction>
              <Transaction>3</Transaction>
              <Transaction>1</Transaction>
            </View>
          </View>

          {/* COMPLETE CARD */}
          {/*  */}
          <View
            style={{
              width: "100%",
              padding: 20,
              backgroundColor: "#ffffff",
              borderRadius: 20,
              shadowColor: "#b3b3b3",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.2,
              shadowRadius: 6,
              marginTop: 25,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.black,
                  opacity: 0.3,
                }}
              >
                Complete Verification
              </Text>
              <Text style={{ color: COLORS.primary, fontWeight: "500" }}>
                60%
              </Text>
            </View>
            <View style={{ position: "relative", marginVertical: 20 }}>
              <View
                style={{
                  width: "100%",
                  height: 12,
                  backgroundColor: COLORS.black,
                  opacity: 0.2,
                  borderRadius: "50%",
                }}
              ></View>
              <View
                style={{
                  position: "absolute",
                  width: "60%",
                  height: 12,
                  backgroundColor: COLORS.primary,
                  borderRadius: "50%",
                }}
              ></View>
            </View>

            <View>


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
                  <MaterialIcons name="email" size={24} color={COLORS.primary} />
                  <View style={{ marginLeft: 20 }}>
                    <Text>Confirm Email</Text>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 12,
                        color: COLORS.black,
                        opacity: 0.4,
                      }}
                    >
                      Please confirm your email for further 
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <AntDesign name="right" size={18} color={COLORS.primary} />
                </TouchableOpacity>
              </View>
            </View>



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
                  <Ionicons name="person" size={24} color={COLORS.primary} />
                  <View style={{ marginLeft: 20 }}>
                    <Text>Personal Infomation</Text>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 12,
                        color: COLORS.black,
                        opacity: 0.4,
                      }}
                    >
                      complete your name and profile photo to complete the data
                    </Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <AntDesign name="right" size={18} color={COLORS.primary} />
                </TouchableOpacity>
              </View>


          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
