import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <WebView
        source={{ uri: "https://www.google.com" }}
        style={{width:"100%",height:"100%"}}
      />
    </SafeAreaView>
  );
}
