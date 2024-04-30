import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Images } from "../Constants/Images";
import { WHITE } from "../Constants/Colors";

const SidebarContent = ({ show, close }) => {
  return (
    <>
      {show ? (
        <>
          <View>
            <View
              style={{
                height: 55,
                // borderTopWidth: 0.5,
                // borderTopColor: WHITE,
                backgroundColor: "#2FCD74",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 18,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", gap: 12 }}>
                <Image
                  source={Images.smallpic}
                  style={{ width: 40, height: 40 }}
                />
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontFamily: "Montserrat 500",
                      fontSize: 12,
                      color: WHITE,
                    }}
                  >
                    Citizen
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Montserrat 500",
                      fontSize: 14,
                      color: WHITE,
                    }}
                  >
                    ALI KHAN
                  </Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.6} onPress={close}>
                <Image
                  source={Images.cross}
                  style={{ width: 23, height: 23 }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 43,
                gap: 24,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 14 }}
              >
                <Image source={Images.edit} style={{ height: 24, width: 24 }} />
                <Text style={StyleSheet.text}>Edit Profile</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 14,
                  alignItems: "center",
                }}
              >
                <Image
                  source={Images.about}
                  style={{ height: 25, width: 25 }}
                />
                <Text style={StyleSheet.text}>About</Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const StyleSheet = {
  text: {
    fontFamily: "Montserrat",
    fontSize: 16,
    color: "#21262380",
  },
};
export default SidebarContent;
