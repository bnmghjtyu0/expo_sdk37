import React from "react";
import { View, Text, Button, TouchableOpacity, Switch } from "react-native";
import * as RootNavigation from "../navigation/RootNavigation";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../context/ThemeContext";
import * as GoogleSignIn from 'expo-google-sign-in';

function HomeScreen({ navigation }) {
  const switchTheme = React.useContext(ThemeContext);
  const colors = useTheme();
  const [user, setUser] = React.useState("");

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

  React.useEffect(() => {
    initAsync();
  }, []);
  initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId: "271709208420-23beu6vh0m4gktdat7p3f67s76tek3mk.apps.googleusercontent.com",
    });
    _syncUserWithStateAsync();
  };

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setUser(user);
  };

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setUser(null);
  };

  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        _syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };

  const onPress = () => {
    if (user) {
      signOutAsync();
    } else {
      signInAsync();
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text onPress={onPress}>Toggle Auth</Text>
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
