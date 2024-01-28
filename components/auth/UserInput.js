import { Text, TextInput, View } from "react-native";

const UserInput = ({
  name,
  value,
  setValue,
  autoCapitalize = "none",
  keyboardType = "default",
  secureTextEntry = false,
  autoComplete = "off",
}) => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text style={{ fontSize: 14 }}>{name}</Text>
      <TextInput
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#8e93a1",
          marginBottom: 30,
        }}
        autoCorrect={false}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

export default UserInput;
