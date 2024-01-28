import { Image, View } from "react-native";

const CircleLogo = () => (
  <View style={{ alignItems: "center" }}>
    <Image
      source={require("../../assets/logo.png")}
      style={{ width: 300, height: 200 }}
    />
  </View>
);

export default CircleLogo;
