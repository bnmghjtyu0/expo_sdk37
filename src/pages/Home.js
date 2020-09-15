import React from "react";
import { View, Text, Button, TouchableOpacity, Switch } from "react-native";
import * as RootNavigation from "../navigation/RootNavigation";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../context/ThemeContext";
function HomeScreen({ navigation }) {
  const switchTheme = React.useContext(ThemeContext);
  const colors = useTheme();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#FFFFFF",
      },
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <MaterialCommunityIcons
            name="approximately-equal"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <Text style={{ fontSize: 20, color: "#000" }}>Home</Text>
      ),
      headerTitleAlign: "center",
      headerRight: () => (
        <Button onPress={() => switchTheme()} title="theme"></Button>
      ),
    });
  }, [navigation, switchTheme]);
  return (
    <View style={{ flex: 1 }}>
      <Text>Open up App.js to start working on your app!</Text>

      <Button
        title="About"
        onPress={() => {
          RootNavigation.navigate("About");
          // RootNavigation.navigate("About", { post: postText });
        }}
      />

      <Button
        onPress={() =>
          navigation.navigate("MyModal", { post: { title: "info01" } })
        }
        title="Open Modal"
      />
    </View>
  );
}

export default HomeScreen;
