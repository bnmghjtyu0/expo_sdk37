import React from "react";
import {  View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ html: require("./web/index.js").template() }} />
    </View>
  );
}
