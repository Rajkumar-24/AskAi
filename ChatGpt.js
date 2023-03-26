import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import Fetch from "./Fetch";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import bg from "./assets/rob.png";

const ChatGPT = () => {
  const [data, setData] = useState([]);
  const API_KEY = "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";

  const apiUrl =
    "https://api.openai.com/v1/engines/text-davinci-003/completions";
  const [textInput, setTextInput] = useState("");

  const handleSend = async () => {
    const prompt = textInput;
    const response = await axios.post(
      apiUrl,
      {
        prompt: prompt,
        max_tokens: 1024,
        temperature: 0.5,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    const text = response.data.choices[0].text;
    console.log(text);
    setData([
      ...data,
      { type: "user", text: textInput },
      { type: "bot", text: text },
    ]);
    setTextInput("");
  };

  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={{ borderBottomColor: "pink" }}>
        <Text style={styles.title}>AskAI</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({ item }) => <Fetch item={item} />}
      />

      <SafeAreaView edges={["bottom"]} style={styles.incontainer}>
        <TextInput
          placeholder="type..."
          style={styles.ininput}
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
        />
        <MaterialIcons
          onPress={handleSend}
          style={styles.send}
          name="send"
          size={16}
          color="white"
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ChatGPT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 70,
  },
  body: {
    margin: 10,
  },
  bot: {
    fontSize: 17,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: 400,
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
  },
  btn: {
    marginBottom: 20,
  },
  btntext: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  incontainer: {
    flexDirection: "row",
    backgroundColor: "#8ccae2",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
  ininput: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
