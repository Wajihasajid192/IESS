import React, { useRef, useState } from "react";

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  Animated,
  TextInput,
  ScrollView,
} from "react-native";
import { BLACK, WHITE } from "../Constants/Colors";
import { Images } from "../Constants/Images";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

export default function SignUp() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showsignupinfo, setShowsignupinfo] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");

  const navigation = useNavigation();

  const handleSelection = (option) => {
    setSelectedOption(option);
    // setShowsignupinfo(true);
    // setShowOptions(false);
  };

  const handleContinue = () => {
    if (selectedOption === "staff" || selectedOption === "citizen") {
      // console.warn("Selected Option: ", selectedOption);
      setShowOptions(false);
      setShowsignupinfo(true);
    } else {
      Alert.alert("Please select an option");
    }
  };

  const [selectedStep, setSelectedStep] = useState(1);
  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;
  const progress4 = useRef(new Animated.Value(0)).current;

  const start1 = () => {
    Animated.timing(progress1, {
      toValue: 40,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const start2 = () => {
    Animated.timing(progress2, {
      toValue: 40,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const start3 = () => {
    Animated.timing(progress3, {
      toValue: 40,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const start4 = () => {
    Animated.timing(progress4, {
      toValue: 40,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{ height: 35, width: 35 }} source={Images.goback} />
        </TouchableOpacity>
        <Image style={styles.logo} source={Images.minder} />
        <Text style={styles.title}>Create Account</Text>
        {showOptions && (
          <>
            <TouchableOpacity
              style={[
                styles.optionContainer,
                selectedOption === "staff" && styles.selectedOption,
              ]}
              onPress={() => handleSelection("staff")}
            >
              <Text style={styles.optionText}>As a Staff Member</Text>
              {selectedOption === "staff" && <Image source={Images.tick} />}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionContainer,
                selectedOption === "citizen" && styles.selectedOption,
              ]}
              onPress={() => handleSelection("citizen")}
            >
              <Text style={styles.optionText}>As a Citizen</Text>
              {selectedOption === "citizen" && <Image source={Images.tick} />}
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonTouchable}
              onPress={handleContinue}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </>
        )}
        {/* Content to show after continue button pressed */}
        {!showOptions && showsignupinfo && (
          <View style={{ marginTop: 30 }}>
            <View
              style={{
                flexDirection: "row",

                justifyContent: "center",
                marginBottom: 2,
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: selectedStep > 0 ? "#2FCD74" : "#f2f2f2",
                    paddingRight: 20,
                    paddingLeft: 17,
                  },
                ]}
              >
                Name
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: selectedStep > 1 ? "#2FCD74" : "#f2f2f2",
                    paddingRight: 20,
                  },
                ]}
              >
                Birthday
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: selectedStep > 2 ? "#2FCD74" : "#f2f2f2",
                    paddingRight: 22,
                  },
                ]}
              >
                Gender
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: selectedStep > 3 ? "#2FCD74" : "#f2f2f2",
                    paddingRight: 22,
                  },
                ]}
              >
                Email
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color: selectedStep > 4 ? "#2FCD74" : "#f2f2f2",
                    paddingRight: 20,
                    marginLeft: 10,
                  },
                ]}
              >
                Pass
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginBottom: 40,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: selectedStep > 0 ? "#2FCD74" : "#f2f2f2",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 18, width: 18 }}
                  source={Images.tick2}
                />
              </View>

              <View
                style={{
                  width: 35,
                  height: 5,
                  backgroundColor: "#f2f2f2",
                }}
              ></View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: selectedStep > 1 ? "#2FCD74" : "#f2f2f2",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 18, width: 18 }}
                  source={Images.tick2}
                />
              </View>
              <View
                style={{
                  width: 35,
                  height: 5,
                  backgroundColor: "#f2f2f2",
                }}
              ></View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: selectedStep > 2 ? "#2FCD74" : "#f2f2f2",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 18, width: 18 }}
                  source={Images.tick2}
                />
              </View>
              <View
                style={{
                  width: 35,
                  height: 5,
                  backgroundColor: "#f2f2f2",
                }}
              ></View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: selectedStep > 3 ? "#2FCD74" : "#f2f2f2",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Text style={{ color: "#fff" }}>4</Text> */}
                <Image
                  style={{ height: 18, width: 18 }}
                  source={Images.tick2}
                />
              </View>
              <View
                style={{
                  width: 35,
                  height: 5,
                  backgroundColor: "#f2f2f2",
                }}
              ></View>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: selectedStep > 4 ? "#2FCD74" : "#f2f2f2",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Text style={{ color: "#fff" }}>4</Text> */}
                <Image
                  style={{ height: 18, width: 18 }}
                  source={Images.tick2}
                />
              </View>
            </View>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                // padding: 50,
                position: "absolute",
                top: 3.8,
                gap: 25,
                marginLeft: 38,
                flexDirection: "row",
              }}
            >
              <Animated.View
                style={{
                  width: progress1,
                  height: 5,
                  marginTop: 30,
                  backgroundColor: "#2FCD74",
                }}
              ></Animated.View>

              <Animated.View
                style={{
                  width: progress2,
                  height: 5,
                  marginTop: 30,
                  backgroundColor: "#2FCD74",
                }}
              ></Animated.View>
              <Animated.View
                style={{
                  width: progress3,
                  height: 5,
                  marginTop: 30,
                  backgroundColor: "#2FCD74",
                }}
              ></Animated.View>
              <Animated.View
                style={{
                  width: progress4,
                  height: 5,
                  marginTop: 30,
                  backgroundColor: "#2FCD74",
                }}
              ></Animated.View>
            </View>
            {selectedStep == 1 && (
              <View>
                <Text
                  style={{
                    fontFamily: "Montserrat 500",
                    fontSize: 18,
                    // fontWeight: "500",
                    color: "#212623BF",
                    marginLeft: 6,
                  }}
                >
                  Your Full Name
                </Text>
                <TextInput
                  value={username}
                  onChangeText={(value) => setUsername(value)}
                  placeholder={"John Doe"}
                  style={styles.user}
                />
              </View>
            )}
            {selectedStep == 2 && (
              <View>
                <Text
                  style={{
                    fontFamily: "Montserrat 500",
                    fontSize: 18,
                    // fontWeight: "500",
                    color: "#212623BF",
                    marginLeft: 6,
                  }}
                >
                  Date of Birth
                </Text>
                <TextInput
                  value={username}
                  onChangeText={(value) => setUsername(value)}
                  placeholder={"DD/MM/YYYY"}
                  style={styles.user}
                />
              </View>
            )}
            {selectedStep == 3 && (
              <View>
                <Text
                  style={{
                    fontFamily: "Montserrat 500",
                    fontSize: 18,
                    // fontWeight: "500",
                    color: "#212623BF",
                    marginLeft: 6,
                  }}
                >
                  Gender
                </Text>
                <View
                  style={{
                    marginTop: 10,
                    height: 50,
                    borderColor: "#212623BF",
                    borderWidth: 0.5,
                    borderRadius: 8,

                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <Picker
                    selectedValue={gender}
                    onValueChange={(itemValue) => {
                      setGender(itemValue);
                      console.warn(gender);
                    }}
                  >
                    <Picker.Item label="Select your gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                  </Picker>
                </View>
              </View>
            )}
            {selectedStep == 4 && (
              <View>
                <Text
                  style={{
                    fontFamily: "Montserrat 500",
                    fontSize: 18,
                    // fontWeight: "500",
                    color: "#212623BF",
                    marginLeft: 6,
                  }}
                >
                  Email
                </Text>
                <TextInput
                  value={username}
                  onChangeText={(value) => setUsername(value)}
                  placeholder={"example@gmail.com"}
                  style={styles.user}
                />
              </View>
            )}
            {selectedStep == 5 && (
              <View>
                <Text
                  style={{
                    fontFamily: "Montserrat 500",
                    fontSize: 18,
                    // fontWeight: "500",
                    color: "#212623BF",
                    marginLeft: 6,
                  }}
                >
                  Password
                </Text>
                <TextInput
                  value={username}
                  secureTextEntry={true}
                  onChangeText={(value) => setUsername(value)}
                  placeholder={"********"}
                  style={styles.user}
                />
                <Text
                  style={{
                    fontFamily: "Montserrat 500",
                    fontSize: 18,
                    // fontWeight: "500",
                    color: "#212623BF",
                    marginLeft: 6,
                    marginTop: 10,
                  }}
                >
                  Confirm Password
                </Text>
                <TextInput
                  value={username}
                  secureTextEntry={true}
                  onChangeText={(value) => setUsername(value)}
                  placeholder={"********"}
                  style={styles.user}
                />
              </View>
            )}

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonTouchable}
              onPress={() => {
                if (selectedStep == 1) {
                  start1();
                }
                if (selectedStep == 2) {
                  start2();
                }
                if (selectedStep == 3) {
                  start3();
                }
                if (selectedStep == 4) {
                  start4();
                }
                if (selectedStep == 5) {
                  navigation.navigate("OTP");
                }
                if (selectedStep == 0) {
                  setSelectedStep(selectedStep + 1);
                } else {
                  setTimeout(() => {
                    setSelectedStep(selectedStep + 1);
                  }, 1000);
                }
              }}
            >
              <Text style={styles.buttonText}>
                {selectedStep == 5 ? "Done" : "Continue"}
              </Text>
            </TouchableOpacity>
            {selectedStep !== 5 && (
              <>
                <View
                  style={{
                    flexDirection: "row",

                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    marginTop: 42,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat 500",
                      // fontWeight: "500",
                      fontSize: 18,
                      color: "#21262380",
                    }}
                  >
                    Sign up with
                  </Text>
                  <TouchableOpacity
                    onPress={() => Alert.alert("Coming Soon...")}
                  >
                    <Image source={Images.google2} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Alert.alert("Coming Soon...")}
                  >
                    <Image source={Images.fb2} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Alert.alert("Coming Soon...")}
                  >
                    <Image source={Images.github} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginTop: 12,
                    marginBottom: 16,
                    borderWidth: 1,
                    borderColor: "#D9D9D9",
                    width: "90%",
                    alignSelf: "center",
                    // justifyContent: "center",
                  }}
                ></View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat 500",
                      fontSize: 14,
                      // fontWeight: "500",
                      color: "#21262380",
                    }}
                  >
                    Have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text
                      style={{
                        fontFamily: "Montserrat 600",
                        fontSize: 14,
                        // fontWeight: "600",
                        color: "#2FCD74",
                      }}
                    >
                      Login in
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 24,
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
  optionContainer: {
    height: 50,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#E5E5E5",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  optionText: {
    fontFamily: "Montserrat Bold",
    fontSize: 14,
    // fontWeight: "700",
    marginRight: 10,
  },
  selectedOption: {
    borderColor: BLACK,
  },
  buttonTouchable: {
    marginTop: 44,
    width: "100%",
    height: 39,
    backgroundColor: "#2FCD74",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: WHITE,
    fontFamily: "Montserrat Bold",
    fontSize: 14,
    // fontWeight: "700",
  },
  user: {
    marginTop: 10,
    height: 50,
    borderColor: "#212623BF",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingLeft: 12,
  },
  logo: {
    alignSelf: "center",
    marginTop: "30%",
  },
});
