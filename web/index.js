import React from "react";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

export const template = () => {
  const [webHTML, setWebHTML] = React.useState("");
  React.useEffect(() => {
    const load = async () => {
      const indexHtml = Asset.fromModule(require("../dist/index.html"));
      await indexHtml.downloadAsync();
      const web = await FileSystem.readAsStringAsync(indexHtml.localUri);
      setWebHTML(web);
    };
    load();
  }, []);

  return webHTML
};
