import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import { Images } from "../Constants/Images";
import { BLACK, WHITE } from "../Constants/Colors";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Alert.alert("Credentials", `${username} + ${password}`);
    navigation.navigate("OTP");
  };
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: WHITE }}>
      <Image source={Images.header} style={{ width: "100%", height: 285 }} />
      <Text style={styles.text1}>Login</Text>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.text2}>Email</Text>
        <TextInput placeholder="Enter Your Email" style={styles.input} />
        <Text style={[styles.text2, { marginTop: 30 }]}>Password</Text>
        <TextInput
          placeholder="********"
          style={[styles.input, { paddingVertical: 5 }]}
        />
        <TouchableOpacity onPress={() => console.warn("Button Working")}>
          <Text style={{ textAlign: "right", marginTop: 15 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login}>
          <Text
            style={{
              fontFamily: "Quicksand Bold",
              fontSize: 18,
              color: WHITE,
              paddingBottom: 5,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "#FFAD33", marginLeft: 5 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontFamily: "Quicksand Bold",
    fontSize: 48,
    color: WHITE,
    position: "absolute",
    top: 112,
    left: 26,
  },
  text2: {
    fontFamily: "Quicksand Bold",
    fontSize: 18,
    marginTop: 43,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: BLACK,
    paddingTop: 15,
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: "Quicksand",
  },
  login: {
    backgroundColor: "#FFAD33",
    height: 50,
    alignItems: "center",
    marginTop: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
