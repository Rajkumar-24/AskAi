import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fetch = ({ item }) => {
  return (
    <View style={{ padding: 5 }}>
      <View
        style={{
          borderColor: "pink",
          borderRadius: 2,
          borderBottomColor: "pink",
        }}
      >
        <View style={styles.user}>
          <Text></Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",

              padding: 20,
              color: item.type === "user" ? "green" : "red",
            }}
          >
            {item.type === "user" ? "You: " : "Bot:"}
          </Text>
        </View>
        <View
          style={{ backgroundColor: "#B2FFFF", borderRadius: 30, padding: 20 }}
        >
          <Text
            style={[
              styles.bot,
              { alignSelf: item.type === "user" ? "flex-start" : "flex-end" },
            ]}
          >
            {item.text}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Fetch;

const styles = StyleSheet.create({
  bot: {
    fontSize: 16,
    flex: 1,
    fontWeight: "bold",
    color: "#0d0d0d",
  },
  user: {
    margin: 5,
    borderRadius: 20,
    borderColor: "pink",
    borderBottomColor: "red",
    backgroundColor: "pink",
  },
  img: {
    height: 40,
    width: 40,
  },
});
