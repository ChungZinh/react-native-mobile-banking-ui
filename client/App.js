import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import StackNavigation from "./navigation/StackNavigation";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <>
      <StackNavigation />
      <ModalPortal />
    </>
  );
}

const styles = StyleSheet.create({});
