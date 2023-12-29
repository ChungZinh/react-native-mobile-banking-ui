import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { COLORS } from '../theme';

const SearchBar = ({input, onChangeText}) => {
  return (
    <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            width: "100%",
            backgroundColor: '#ffffff',
            borderRadius: 15,
          }}
        >
          <Feather
            style={{ marginLeft: 10 }}
            name="search"
            size={24}
            color="black"
          />
          <TextInput
            style={{
              paddingVertical: 15,
              paddingRight: 30,
              marginLeft: 10,
            }}
            placeholder="Search Menu"
            value={input}
            onChangeText={onChangeText}
          />
        </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})