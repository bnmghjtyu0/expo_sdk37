import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import * as RootNavigation from "../navigation/RootNavigation";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
function AboutScreen({ navigation, route }) {
  navigation.setOptions({
    headerStyle: {
      backgroundColor: "#fff",
    },
    headerTitleAlign: "center",
    headerLeft: () => (
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.pop()}
      >
        <MaterialIcons name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
    ),
    headerTitle: () => (
      <Text style={{ fontSize: 20, color: "#000" }}>About</Text>
    ),
    headerTitleAlign: "center",
  });
  return (
    <View style={{ flex: 1 }}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Go to Details"
        onPress={() => RootNavigation.navigate("Home")}
      />
      <Button
        onPress={() =>
          navigation.navigate("MyModal", { post: { title: "info02" } })
        }
        title="Open Modal"
      />
    </View>
  );
}

export default AboutScreen;
