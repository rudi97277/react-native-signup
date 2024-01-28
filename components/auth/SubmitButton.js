import { Text, TouchableOpacity } from "react-native";

const SubmitButton = ({ title, handleSubmit, loading }) => (
  <TouchableOpacity
    onPress={handleSubmit}
    style={{
      backgroundColor: "#ff9900",
      height: 40,
      justifyContent: "center",
      marginBottom: 20,
      marginHorizontal: 15,
      borderRadius: 24,
    }}
  >
    <Text
      style={{
        fontSize: 14,
        textAlign: "center",
        fontWeight: 500,
        color: "#ffffff",
      }}
    >
      {loading ? "Please wait..." : title}
    </Text>
  </TouchableOpacity>
);

export default SubmitButton;
