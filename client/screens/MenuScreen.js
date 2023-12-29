import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { OtherMenu, Shortcuts } from "../data";
import SearchBar from "../components/SearchBar";
const MenuScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bacground }}>
      <StatusBar style="light" />
      <SafeAreaView style={{ paddingHorizontal: 15 }}>
        {/* HEADER */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: COLORS.bacground2,
              width: 25,
              height: 25,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <AntDesign
              style={{}}
              name="arrowleft"
              size={20}
              color={COLORS.bacground}
            />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              color: COLORS.bacground2,
              fontWeight: "600",
            }}
          >
            Menu
          </Text>
          <Text style={{ opacity: 0 }}>----</Text>
        </View>

        {/* SEARCH BAR */}
        <SearchBar input={input} onChangeText={(text) => setInput(text)} />

        <ScrollView>
          {/* SHORTCUTS */}

          <View style={{ marginTop: 25 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.bacground2,
                fontWeight: "600",
                marginVertical: 15,
              }}
            >
              Shortcuts
            </Text>

            <FlatList
              data={Shortcuts}
              renderItem={({ item }) => {
                if (item.name.toLowerCase().includes(input.toLowerCase())) {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 20,
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        {item.icon}
                        <Text
                          style={{ marginLeft: 15, color: COLORS.bacground2 }}
                        >
                          {item.name}
                        </Text>
                      </View>
                      <AntDesign
                        name="right"
                        size={18}
                        color={COLORS.bacground2}
                      />
                    </TouchableOpacity>
                  );
                }
              }}
            />
          </View>

          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: COLORS.bacground2,
              opacity: 0.1,
              marginVertical: 20,
            }}
          ></View>

          <View>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.bacground2,
                fontWeight: "600",
                marginVertical: 15,
              }}
            >
              Shortcuts
            </Text>
            <FlatList
              data={OtherMenu}
              renderItem={({ item }) => {
              if (item.name.toLowerCase().includes(input.toLowerCase()))
              {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {item.icon}
                    <Text style={{ marginLeft: 15, color: COLORS.bacground2 }}>
                      {item.name}
                    </Text>
                  </View>
                  <AntDesign name="right" size={18} color={COLORS.bacground2} />
                </TouchableOpacity>
              )
              }
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
