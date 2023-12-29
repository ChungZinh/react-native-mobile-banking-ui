import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme'
import { Entypo } from "@expo/vector-icons";

const Keyboard = ({num, number, setNumber, }) => {
  
  return (
    <View>
      <FlatList
              numColumns={3}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              data={num}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setNumber(number + item.toString())}
                >
                  <Text
                    style={{ padding: 25, fontWeight: "500", fontSize: 20 }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => setNumber(number + ".")}>
                <Text style={{ padding: 25, fontWeight: "500", fontSize: 20 }}>
                  .
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setNumber(number + "0")}>
                <Text style={{ padding: 25, fontWeight: "500", fontSize: 20 }}>
                  0
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 10,
                  marginRight: 15,
                  borderRadius: "50%",
                  backgroundColor: COLORS.black,
                }}
                onPress={() => setNumber(number.slice(0, -1))}
              >
                <Entypo
                  style={{ fontWeight: "500" }}
                  name="chevron-left"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>
    </View>
  )
}

export default Keyboard

const styles = StyleSheet.create({})