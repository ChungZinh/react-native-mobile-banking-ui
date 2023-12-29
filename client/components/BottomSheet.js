import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  PanResponder,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import { COLORS } from "../theme";
import Heading2 from "./Heading2";
import { againTran, transHistory } from "../data";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const { width: WINDOW_WITDH, height: WINDOW_HEIGHT } = Dimensions.get("window");

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.82;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.44;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 10;

const BottomSheet = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        lastGestureDy.current += gesture.dy;
        // animatedValue.flattenOffset();
        // if (gesture.dy > 0) {
        //   if (gesture.dy <= DRAG_THRESHOLD) {
        //     springAnimation("up");
        //   } else {
        //     springAnimation("down");
        //   }
        // } else {
        //   if (gesture.dy >= -DRAG_THRESHOLD) {
        //     springAnimation("down");
        //   } else {
        //     springAnimation("up");
        //   }
        // }
      },
    })
  ).current;

  //   const springAnimation  = (direction: 'up'| 'down') => {
  //       lastGestureDy.current = direction[1]? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
  //       Animated.spring(animatedValue, {
  //           toValue: lastGestureDy.current,
  //           useNativeDriver: true,
  //       }).start()
  //   }

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  return (
    <Animated.View
      style={[
        {
          width: WINDOW_WITDH,
          position: "absolute",
          height: BOTTOM_SHEET_MAX_HEIGHT,
          bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
          backgroundColor: COLORS.bacground2,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          shadowColor: "#33333",
          shadowOpacity: 0.4,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 2 },
        },
        bottomSheetAnimation,
      ]}
    >
      <View
        style={{
          alignSelf: "center",
          paddingHorizontal: 50,
          paddingTop: 10,
          paddingBottom: 20,
        }}
        {...panResponder.panHandlers}
      >
        <View
          style={{
            width: 20,
            height: 2,
            backgroundColor: COLORS.black,
            opacity: 0.2,
          }}
        ></View>

        {/* CONTENT */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 15 }}>
          <View>
            <Text style={{ fontSize: 13, color: COLORS.black, opacity: 0.5 }}>
              Send Again
            </Text>

            <View style={{ marginTop: 10 }}>
              <FlatList
                data={againTran}
                renderItem={({ item }) => (
                  <View>
                    <Image source={item.img} />
                    <Text
                      style={{
                        marginTop: 8,
                        color: COLORS.black,
                        opacity: 0.8,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: "space-between" }}
              />
            </View>
          </View>

          <View >
            <Text style={{ fontSize: 13, color: COLORS.black, opacity: 0.5, marginVertical: 20}}>
              Transaction History
            </Text>

            <FlatList
              data={transHistory}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        padding: 10,
                        borderRadius: 15,
                        backgroundColor: "#ffff",
                        marginRight: 15,
                        shadowColor: "#b3b3b3",
                        shadowOffset: { width: 1, height: 3 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                      }}
                    >
                      {item.img}
                    </View>
                    <View style={{}}>
                      <Text style={{ fontWeight: "600", marginBottom: 8 }}>
                        {item.type}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: COLORS.black,
                          opacity: 0.5,
                        }}
                      >
                        {item.date}
                      </Text>
                    </View>
                  </View>

                  <View style={{}}> 
                    <Text style={{textAlign: 'right',marginBottom: 8, fontWeight: '600'}}>${item.price}</Text>
                    <Text>{item.device}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({});
