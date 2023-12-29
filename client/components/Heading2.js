import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Heading2 = (props) => {
  return (
    <View>
      <Text
                style={{
                  color: "#b3b3b3",
                  paddingHorizontal: 30,
                  textAlign: "center",
                  paddingHorizontal: 20,
                }}
              >
                {props.text}
                
              </Text>
    </View>
  )
}

export default Heading2

const styles = StyleSheet.create({})