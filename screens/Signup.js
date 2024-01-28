import { Button, Text, TouchableOpacity, View } from "react-native";
import UserInput from "../components/auth/UserInput";
import { useEffect, useState } from "react";
import SubmitButton from "../components/auth/SubmitButton";
import axios from "axios";
import CircleLogo from "../components/auth/CicleLogo";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    console.log("testing");
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    }

    console.log({ name, email, password });

    try {
      const { data } = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
      });
      console.log("SIGN IN SUCCESS =>", data);
      alert("Sign up successfull");
      setLoading(false);
      //redirect
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <CircleLogo />
      <Text style={{ fontSize: 24, textAlign: "center" }}>Sign Up</Text>

      <UserInput
        name="Name"
        value={name}
        setValue={setName}
        autoCapitalize={"words"}
        autoComplete="name"
      />
      <UserInput
        name="Email"
        value={email}
        setValue={setEmail}
        keyboardType="email-address"
      />
      <UserInput
        name="Password"
        value={password}
        secureTextEntry
        setValue={setPassword}
      />

      <SubmitButton
        title="Sign Up"
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </View>
  );
};

export default Signup;
