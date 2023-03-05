import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatGPT from "./ChatGpt";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatGPT />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
