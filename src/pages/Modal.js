import React from "react";
import { Modal } from "react-native";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

function ModalScreen({ navigation, route }) {
  const { colors } = useTheme();
  navigation.setOptions({
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerTitleAlign: "center",
    headerLeft: () => (
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
    ),
    headerTitle: () => (
      <Text style={{ fontSize: 20, color: "#000" }}>
        {route.params?.post?.title ?? ""}
      </Text>
    ),
    headerTitleAlign: "center",
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export default ModalScreen;
