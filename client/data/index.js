export const againTran = [
  {
    id: 1,
    name: "Ojaman",
    img: require("../assets/img/user/user1.png"),
    phone: '0987 433 211'
  },
  {
    id: 2,
    name: "Mariana",
    img: require("../assets/img/user/user2.png"),
    phone: '0987 433 211'

  },
  {
    id: 3,
    name: "Jimanti",
    img: require("../assets/img/user/user3.png"),
    phone: '0987 433 211'

  },
  {
    id: 4,
    name: "Jumin",
    img: require("../assets/img/user/user4.png"),
    phone: '0987 433 211'

  },
];
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const transHistory = [
  {
    id: 1,
    type: "Equipment",
    price: "200,98",
    date: "17 nov",
    img: <AntDesign name="camerao" size={24} color="green" />,
    device: "Laptop Acer aspire 5",
  },
  {
    id: 2,
    type: "Entertaiment",
    price: "160,98",
    date: "17 nov",
    img: <Ionicons name="game-controller-outline" size={24} color="blue" />,
    device: "Game COD",
  },
  {
    id: 3,
    type: "Streaming",
    price: "120,98",
    date: "14 nov",
    img: <Feather name="play-circle" size={24} color="violet" />,
    device: "Subscription Nextfit",
  },
  {
    id: 4,
    type: "Food",
    price: "20,98",
    date: "13 nov",
    img: <Ionicons name="restaurant-outline" size={24} color="blue" />,
    device: "Gofood",
  },
  {
    id: 5,
    type: "Shoping",
    price: "720,98",
    date: "12 nov",
    img: <AntDesign name="shoppingcart" size={24} color="green" />,
    device: "Plaza Mall",
  },
  {
    id: 6,
    type: "Travel",
    price: "520,98",
    date: "12 nov",
    img: <Feather name="map-pin" size={24} color="violet" />,
    device: "Ho Chi Minh, VietName",
  },
];

export const Shortcuts = [
  {
    id: 1,
    name: "Send Money",
    icon: (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.yellow,
          width: 50,
          height: 50,
          borderRadius: 20,
        }}
      >
        <View style={{padding: 4, backgroundColor: COLORS.bacground, borderRadius: 5}}>
        <AntDesign name="arrowright" size={14} color={COLORS.yellow} />
        </View>
      </TouchableOpacity>
    ),
  },
  {
    id: 2,
    name: "Top-up Wallet",
    icon: (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.yellow,
          width: 50,
          height: 50,
          borderRadius: 20,
        }}
      >
        <Ionicons name="download" size={24} color={COLORS.bacground} />
      </TouchableOpacity>
    ),
  },
  {
    id: 3,
    name: "Bill Payment",
    icon: (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.yellow,
          width: 50,
          height: 50,
          borderRadius: 20,
        }}
      >
        <Ionicons name="card" size={22} color={COLORS.primary} />
      </TouchableOpacity>
    ),
  },
  {
    id: 4,
    name: "Code QR",
    icon: (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.yellow,
          width: 50,
          height: 50,
          borderRadius: 20,
        }}
      >
        <MaterialCommunityIcons
                    name="credit-card-scan"
                    size={22}
                    color={COLORS.primary}
                  />
      </TouchableOpacity>
    ),
  },
];
import { FontAwesome5 } from '@expo/vector-icons';
export const OtherMenu = [
  {
    id: 1,
    name: "History Transactions",
    icon: (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.yellow,
          width: 50,
          height: 50,
          borderRadius: 20,
        }}
      >
        <AntDesign name="retweet" size={24} color="black" />
      </TouchableOpacity>
    ),
  },
  {
    id: 2,
    name: "Request Payment",
    icon: (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.yellow,
          width: 50,
          height: 50,
          borderRadius: 20,
        }}
      >
        <FontAwesome5 name="user-friends" size={24} color="black" />
      </TouchableOpacity>
    ),
  },
]


export const Transfer = [
  {
    id: 1, 
    name: 'Bank account'
  },
  {
    id: 2, 
    name: 'Scan'
  },
  {
    id: 3, 
    name: 'Nearby'
  },
]