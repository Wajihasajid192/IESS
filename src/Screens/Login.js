import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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
    <ScrollView style={{ flex: 1, backgroundColor: WHITE }}>
      <View style={styles.main}>
        <Image style={styles.logo} source={Images.minder} />
        <Text style={styles.text1}>Getting Started</Text>
        <Text style={styles.text2}>Let’s login for explore continues</Text>
        <TextInput
          value={username}
          onChangeText={(value) => setUsername(value)}
          placeholder={"Username"}
          style={styles.user}
        />
        <TextInput
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder={"Password"}
          secureTextEntry
          style={styles.pass}
        />
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button1Touchable}
          onPress={handleLogin}
        >
          <Text style={styles.button1text}>LOGIN</Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            marginBottom: "10%",
            marginTop: "5%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "#21262340",
                width: 115,
                marginTop: 33,
                height: 0.5,
              }}
            ></View>
            <Text
              style={{
                fontFamily: "Montserrat Bold",
                fontSize: 10,
                // fontWeight: 700,
                color: "#21262340",
                marginTop: 26,
                paddingHorizontal: 2,
              }}
            >
              Or Sign in with
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: "#21262340",
                width: 115,

                marginTop: 33,
                height: 0.5,
              }}
            ></View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button2Touchable}
          onPress={() => Alert.alert("Coming Soon...")}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image style={{ height: 20, width: 20 }} source={Images.google} />
            <Text
              style={{
                fontFamily: "Montserrat 600",
                // fontWeight: "700",
                fontSize: 14,
                color: BLACK,
                marginTop: 0.5,
              }}
            >
              Sign in with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button3Touchable}
          onPress={() => Alert.alert("Coming Soon")}
        >
          <View style={{ flexDirection: "row" }}>
            <Image style={{ height: 24, width: 24 }} source={Images.facebook} />
            <Text
              style={{
                fontFamily: "Montserrat 600",

                fontSize: 13,
                color: WHITE,
                marginTop: 2.5,
              }}
            >
              Sign in with Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat 500",

              fontSize: 12,
            }}
          >
            Don’t have an acount?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{
                fontFamily: "Montserrat 600",

                fontSize: 12,
                color: "#2FCD74",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 25,
  },
  logo: {
    alignSelf: "center",
    marginTop: "30%",
  },
  text1: {
    fontSize: 24,
    marginTop: 20,
    fontFamily: "Montserrat Bold",
    alignSelf: "center",
  },
  text2: {
    fontSize: 12,
    marginTop: 5,
    fontFamily: "Montserrat 500",
    alignSelf: "center",
    color: "#21262340",
  },
  user: {
    marginTop: 36,
    height: 50,
    borderColor: "#212623BF",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingLeft: 12,
  },
  pass: {
    marginTop: 10,
    height: 50,
    borderColor: "#212623BF",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingLeft: 12,
  },
  forgot: {
    color: "#F36060",
    textAlign: "right",
    fontFamily: "Roboto 500",
    fontSize: 13,
    // fontWeight: "500",
    marginTop: 9,
  },
  button1Touchable: {
    marginTop: 10,
    width: "100%",
    height: 39,
    backgroundColor: "#2FCD74",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button1text: {
    color: "white",
    fontSize: 14,

    fontFamily: "Montserrat Bold",
  },
  button2Touchable: {
    marginTop: 10,
    width: "100%",
    height: 39,
    backgroundColor: WHITE,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#414141",
  },
  button3Touchable: {
    marginTop: 10,
    width: "100%",
    height: 39,
    backgroundColor: "#2781EB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#2781EB",
  },
});

export default Login;
