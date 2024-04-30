import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

import { BLACK, WHITE } from "../Constants/Colors";
import { Images } from "../Constants/Images";
import Sidebar from "../Components/Sidebar";
import { useNavigation } from "@react-navigation/native";
const Complain = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigation = useNavigation();
  const { data, updateData } = props;

  // Function to update data
  const handleDataChange = (key, value) => {
    updateData({ ...data, [key]: value });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.head}>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity onPress={props.onBackPress}>
            <Image source={Images.back2} style={{ height: 19, width: 19 }} />
          </TouchableOpacity>

          <Text style={[styles.headerText, { color: WHITE }]}>Complain</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity onPress={() => setShowSidebar(!showSidebar)}>
            <Image source={Images.bell} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowSidebar(!showSidebar)}>
            <Image source={Images.menu} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <Sidebar
        show={showSidebar}
        onTouchOverlay={() => {
          setShowSidebar(!showSidebar);
        }}
      />
      <View style={styles.body}>
        <Text style={styles.binid}>Bin ID</Text>
        <TextInput
          value={data.binid}
          onChangeText={(value) => handleDataChange("binid", value)}
          style={styles.idinput}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.binid, { marginTop: 23 }]}>Bin Location</Text>

          <Text
            style={[
              styles.binid,
              {
                marginTop: 23,
                fontSize: 16,
                fontFamily: "Montserrat",
                paddingRight: 5,
              },
            ]}
          >
            Optional
          </Text>
        </View>

        <TextInput
          value={data.binlocation}
          onChangeText={(value) => handleDataChange("binlocation", value)}
          style={styles.idinput}
        />
        <Text style={[styles.binid, { marginTop: 32 }]}>My Complain</Text>
        <TextInput
          multiline={true}
          textAlignVertical="top"
          style={[styles.idinput, { height: 215, paddingVertical: 16 }]}
        />
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>Post</Text>
          <Image source={Images.post} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    height: 50,
    backgroundColor: "#2FCD74",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Montserrat Bold",
  },
  icon: {
    width: 24,
    height: 24,
  },
  body: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: 16,
    // alignItems: "flex-start",
  },

  buttonTouchable: {
    marginTop: 40,
    width: 81,
    height: 32,
    gap: 6,
    backgroundColor: "#2FCD74",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Open Sans 600",
    lineHeight: 16,
  },
  binid: {
    color: BLACK,
    fontSize: 16,
    fontFamily: "Montserrat 600",
    marginTop: "18%",
    color: "#36454F",
    marginLeft: 9,
  },
  idinput: {
    height: 55,
    backgroundColor: WHITE,
    borderRadius: 8,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#21262380",
    paddingHorizontal: 16,
    width: "100%",
  },
  complainText: {
    color: "#212623BF",
    fontSize: 12,
    fontFamily: "Montserrat",
    textDecorationLine: "underline",
    marginTop: 13,
  },
});

export default Complain;
