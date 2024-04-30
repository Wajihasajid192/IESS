import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
  StyleSheet,
} from "react-native";
import React, { useRef, useState } from "react";
import { WHITE } from "../Constants/Colors";
import { Images } from "../Constants/Images";

const Progress = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;
  const progress4 = useRef(new Animated.Value(0)).current;

  const start1 = () => {
    Animated.timing(progress1, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const start2 = () => {
    Animated.timing(progress2, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const start3 = () => {
    Animated.timing(progress3, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const start4 = () => {
    Animated.timing(progress4, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={{ flex: 1, backgroundColor: WHITE }}>
      <View style={{ flexDirection: "row", gap: 21, justifyContent: "center" }}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>Birthday</Text>
        <Text style={styles.text}>Gender</Text>
        <Text style={styles.text}>Email</Text>
        <Text style={styles.text}>Pass</Text>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          // padding: 10,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            // marginRight: 30,
            backgroundColor: selectedStep > 0 ? "#2FCD74" : "#f2f2f2",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Text style={{ color: "#fff" }}>1</Text> */}
          <Image style={{ height: 18, width: 18 }} source={Images.tick2} />
        </View>

        <View
          style={{
            width: 35,
            height: 5,
            backgroundColor: "#f2f2f2",
          }}
        ></View>

        {/* <View
          style={{
            width: 35,
            height: 5,
            backgroundColor: "#f2f2f2",
          }}
        ></View> */}
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            // marginRight: 30,

            backgroundColor: selectedStep > 1 ? "#2FCD74" : "#f2f2f2",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Text style={{ color: "#fff" }}>2</Text> */}
          <Image style={{ height: 18, width: 18 }} source={Images.tick2} />
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
            // marginRight: 30,

            backgroundColor: selectedStep > 2 ? "#2FCD74" : "#f2f2f2",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Text style={{ color: "#fff" }}>3</Text> */}
          <Image style={{ height: 18, width: 18 }} source={Images.tick2} />
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
          <Image style={{ height: 18, width: 18 }} source={Images.tick2} />
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
          <Image style={{ height: 18, width: 18 }} source={Images.tick2} />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          // padding: 50,
          position: "absolute",
          top: 100,
          gap: 10,
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
      <TouchableOpacity
        style={{
          marginTop: 100,
          height: 50,
          width: 200,
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          alignSelf: "center",
        }}
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
          if (selectedStep == 0) {
            setSelectedStep(selectedStep + 1);
          } else {
            setTimeout(() => {
              setSelectedStep(selectedStep + 1);
            }, 1000);
          }
        }}
      >
        <Text>Next Step</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    // color: "#f2f2f2",
    fontSize: 12,
    fontFamily: "Montserrat",
    fontWeight: "500",
  },
});

export default Progress;
