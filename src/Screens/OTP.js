import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../Constants/Images";
import { BLACK, WHITE } from "../Constants/Colors";
import OTPTextInput from "react-native-otp-textinput";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const navigation = useNavigation();

  const submitOTP = () => {
    // Handle OTP submission here
    console.warn(otp);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={{ height: 35, width: 35 }} source={Images.goback} />
      </TouchableOpacity>
      <Image style={styles.logo} source={Images.minder} />
      <Text style={styles.title}>Enter Confirmation Code</Text>
      <Text style={styles.title2}>
        Enter the 6-digit code we sent to john@doe.com
      </Text>
      <TouchableOpacity>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>
      {/* <TextInput
        style={styles.input}
        value={otp}
        onChangeText={handleChangeText}
        keyboardType="numeric"
        placeholder="Enter OTP"
        maxLength={6}
      /> */}
      <OTPTextInput
        defaultValue={otp}
        handleTextChange={(text) => setOtp(text)}
        containerStyle={styles.otpContainer}
        textInputStyle={styles.otpTextInput}
        inputCount={4}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={{
          marginTop: 44,
          width: "100%",
          height: 39,
          backgroundColor: "#2FCD74",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{
            color: WHITE,
            fontFamily: "Montserrat Bold",
            fontSize: 14,
            // fontWeight: "700",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: WHITE,
  },
  logo: {
    alignSelf: "center",
    marginTop: "20%",
  },
  title: {
    fontFamily: "Montserrat Bold",
    fontSize: 24,
    // fontWeight: "700",
    color: "#36454F",
    alignSelf: "center",
    marginTop: 27,
  },
  title2: {
    fontFamily: "Montserrat",
    fontSize: 16,
    // fontWeight: "400",
    color: "#36454F",
    alignSelf: "center",
    marginTop: 16,
    textAlign: "center",
  },
  resendText: {
    color: BLACK,
    marginTop: 16,
    fontFamily: "Montserrat Bold",
    // fontWeight: "700",
    fontSize: 16,
    alignSelf: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  otpContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  otpTextInput: {
    width: 50,
    height: 50,
    backgroundColor: "#ECECEC",
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OTP;
