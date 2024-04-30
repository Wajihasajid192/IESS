import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { BLACK, WHITE } from "../Constants/Colors";
import { Images } from "../Constants/Images";
import Sidebar from "../Components/Sidebar";
import { useNavigation } from "@react-navigation/native";
import Complain from "./Complain";

const CitizenHome = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isScanning, setIsScanning] = useState(false); // Track if scanning is active
  const [complain, setComplain] = useState(false);
  const navigation = useNavigation();
  const [data, setData] = useState({ binid: "", binlocation: "" });

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setIsScanning(false);

    // Extract bin ID and bin location from the scanned data
    const regex = /\(([^,]+),([^)]+)\)/; // Regular expression to match (binID,binLocation)
    const match = data.match(regex);

    if (match) {
      const binid = match[1]; // Extract bin ID
      const binlocation = match[2]; // Extract bin location

      // Set the extracted data using setData
      setData({ binid, binlocation });

      setComplain(true);

      // Do something with the scanned data, e.g., navigate to a new screen
      // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    } else {
      // Handle the case when the scanned data doesn't match the expected format
      alert("Scanned data is invalid!");
    }
  };

  const startScanning = () => {
    setIsScanning(true);
    setScanned(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {!complain && (
        <>
          <View style={styles.head}>
            <Text style={[styles.headerText, { color: WHITE }]}>Welcome</Text>
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
            <Image source={Images.qr} style={styles.qrImage} />
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={startScanning} // Call startScanning function when button is pressed
            >
              <Text style={styles.buttonText}>Scan QR Code for Complain</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <TouchableOpacity
              onPress={() => {
                setComplain(true);
              }}
            >
              <Text style={styles.complainText}>write your complain</Text>
            </TouchableOpacity>
          </View>
          {hasPermission &&
            isScanning && ( // Only render BarCodeScanner when isScanning is true
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
              />
            )}
        </>
      )}
      {complain && (
        <Complain
          onBackPress={() => setComplain(false)}
          data={data}
          updateData={(newData) => setData(newData)}
        />
      )}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: WHITE,
  },
  qrImage: {
    height: 130,
    width: 130,
    marginTop: -60,
  },
  buttonTouchable: {
    marginTop: 40,
    width: "54%",
    height: 32,
    backgroundColor: "#2FCD74",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Montserrat 600",
  },
  orText: {
    color: BLACK,
    fontSize: 12,
    fontFamily: "Montserrat",
    marginTop: 18,
  },
  complainText: {
    color: "#212623BF",
    fontSize: 12,
    fontFamily: "Montserrat",
    textDecorationLine: "underline",
    marginTop: 13,
  },
});

export default CitizenHome;
