import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import FingerprintScreen from "../screens/FingerprintScreen";
import LoginScreen from "../screens/LoginScreen";
import SetPINScreen from "../screens/SetPINScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AnalystScreen from "../screens/AnalystScreen";
import QRScreen from "../screens/QRScreen";
import CardScreen from "../screens/CardScreen";
import NotificationScreen from "../screens/NotificationScreen";

import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuScreen from "../screens/MenuScreen";
import TransferScreen from "../screens/TransferScreen";
import TransferDetailScreen from "../screens/TransferDetailScreen";
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fingerprint"
          component={FingerprintScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SetPIN"
          component={SetPINScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transfer"
          component={TransferScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransferDetail"
          component={TransferDetailScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 12,
          left: 15,
          right: 15,
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          height: 50,
          borderTopWidth: 0,
          shadowColor: "#3333",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang Chủ",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons
                name="home-filled"
                size={28}
                color={COLORS.primary}
              />
            ) : (
              <MaterialIcons name="home-filled" size={26} color="#c3c3c3" />
            ),
        }}
      />
      <Tab.Screen
        name="Analyst"
        component={AnalystScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="piechart" size={26} color={COLORS.primary} />
            ) : (
              <AntDesign name="piechart" size={24} color="#c3c3c3" />
            ),
        }}
      />
      <Tab.Screen
        name="QR"
        component={QRScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  padding: 10,
                  borderRadius: 15,
                  top: -15,
                  shadowColor: "#c3c3c3",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: .5,
                  shadowRadius: 10,
                }}
              >
                <View>
                  <MaterialCommunityIcons
                    name="credit-card-scan"
                    size={28}
                    color="#ffffff"
                  />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  padding: 10,
                  borderRadius: 15,
                  top: -15,
                  shadowColor: "#33333",
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.4,
                  shadowRadius: 10,
                  elevation: 6,
                }}
              >
                <View>
                  <MaterialCommunityIcons
                    name="credit-card-scan"
                    size={28}
                    color="#ffffff"
                  />
                </View>
              </TouchableOpacity>
            ),
        }}
      />

      <Tab.Screen
        name="Card"
        component={CardScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="card" size={28} color={COLORS.primary} />
            ) : (
              <Ionicons name="card" size={26} color="#c3c3c3" />
            ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="ios-notifications"
                size={28}
                color={COLORS.primary}
              />
            ) : (
              <Ionicons name="ios-notifications" size={26} color="#c3c3c3" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
