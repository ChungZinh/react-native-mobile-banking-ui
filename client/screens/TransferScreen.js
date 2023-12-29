import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { Transfer, againTran } from "../data/index";
import { Feather } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import { Entypo } from "@expo/vector-icons";
const TransferScreen = () => {
  const [input, setInput] = useState("");
  const navigation = useNavigation();
  const [active, setActive] = useState(1);
  const [activeU, setActiveU] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bacground }}>
      <StatusBar style="light" />
      <SafeAreaView
        style={{
          position: "relative",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {/* HEADER */}
        <View style={{ paddingHorizontal: 15 }}>
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
              Transfer
            </Text>
            <Text style={{ opacity: 0 }}>----</Text>
          </View>

          {/*  */}

          <View style={{ paddingHorizontal: 25, marginTop: 40 }}>
            <FlatList
              data={Transfer}
              renderItem={({ item }) => {
                let isActive = item.id === active;
                return (
                  <TouchableOpacity
                    onPress={() => setActive(item.id)}
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <View
                      style={
                        isActive ? styles.activeCircle : { borderWidth: 0 }
                      }
                    >
                      <View
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: COLORS.bacground2,
                          opacity: isActive ? 1 : 0.5,
                          borderRadius: 10,
                        }}
                      ></View>
                    </View>
                    <Text
                      style={{
                        color: COLORS.bacground2,
                        opacity: isActive ? 1 : 0.5,
                        fontSize: 13,
                        marginTop: 10,
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              numColumns={3}
            />
          </View>
        </View>

        {/* CONTENT */}

        <View
          style={{
            width: "100%",
            height: "70%",
            backgroundColor: COLORS.bacground2,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            shadowColor: "#3333",
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            paddingHorizontal: 15,
          }}
        >
          <SearchBar input={input} onChangeText={(text) => setInput(text)} />

          <ScrollView
            style={{ marginBottom: 60 }}
            showsVerticalScrollIndicator={false}
          >
            {/* RECENTS CONTACTS */}
            <View>
              <Text
                style={{
                  color: COLORS.black,
                  opacity: 0.4,
                  marginVertical: 18,
                }}
              >
                Recents Contacts
              </Text>

              <View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={againTran}
                  renderItem={({ item }) => {
                    let isActive = item.id === activeU;
                    if (item.name.toLowerCase().includes(input.toLowerCase())) {
                      return (
                        <TouchableOpacity
                          onPress={() => setActiveU(item.id)}
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: isActive ? 1 : 0,
                            borderColor: COLORS.primary,
                            marginRight: 10,
                            width: isActive ? 125 : 120,
                            height: 120,
                            borderRadius: 10,
                          }}
                        >
                          <Image
                            style={{ width: 40, height: 40 }}
                            source={item.img}
                          />
                          <Text style={{ fontSize: 16, marginTop: 20 }}>
                            {item.name}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              color: COLORS.black,
                              opacity: 0.3,
                              marginTop: 8,
                            }}
                          >
                            Bank - {item.phone}
                          </Text>
                        </TouchableOpacity>
                      );
                    }
                  }}
                />
              </View>
            </View>

            {/* LINE */}

            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: COLORS.black,
                opacity: 0.2,
                marginVertical: 30,
              }}
            ></View>

            {/* All Contact */}

            <View>
              <Text
                style={{ color: COLORS.black, opacity: 0.4, marginBottom: 20 }}
              >
                All Contacts
              </Text>

              <View>
                <FlatList
                  data={againTran}
                  renderItem={({ item }) => {
                    if (item.name.toLowerCase().includes(input.toLowerCase())) {
                      return (
                        <TouchableOpacity
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 25,
                            paddingVertical: 5,
                          }}
                        >
                          <Image
                            style={{ width: 50, height: 50, marginRight: 20 }}
                            source={item.img}
                          />
                          <View>
                            <Text style={{ fontSize: 16 }}>{item.name}</Text>
                            <Text
                              style={{
                                fontSize: 13,
                                color: COLORS.black,
                                opacity: 0.3,
                                marginTop: 8,
                              }}
                            >
                              Bank - {item.phone}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    }
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>

        {/* BOTTOM BAR */}

        <TouchableOpacity
          onPress={() => navigation.navigate("TransferDetail",{...activeU})}
          style={{
            width: "100%",
            height: 60,
            backgroundColor: "#ffffff",
            position: "absolute",
            bottom: 0,
            shadowColor: "#b3b3b3",
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.primary,
            }}
          >
            <Entypo name="plus" size={24} color="#FFFFFF" />
          </View>

          <Text style={{ marginLeft: 25, color: COLORS.black, opacity: 0.5 }}>
            Add Contact
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  activeCircle: {
    padding: 5,
    borderWidth: 1,
    borderColor: COLORS.bacground2,
    borderRadius: "50%",
  },
});
