import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import OTP from "./Screens/OTP";
import SignUp from "./Screens/SignUp";
import { LinearGradient } from "expo-linear-gradient";
import CitizenHome from "./Screens/CitizenHome";
import Complain from "./Screens/Complain";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar, View } from "react-native";
import { useState, useEffect } from "react";
import { GRADIENT_1 } from "./Constants/Colors";
import Progress from "./Screens/Progress";
export const CustomStatusBar = ({
  backgroundColor,
  barStyle = "light-content",
}) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={[GRADIENT_1, GRADIENT_1]}
      start={[1, 1]}
      end={[0, 0]}
      location={[0.25, 0.7, 1]}
      style={{
        height: insets.top,
      }}
    >
      <View style={{ backgroundColor, height: insets.top }}>
        <StatusBar
          animated={true}
          translucent={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
      </View>
    </LinearGradient>
  );
};
const Stack = createNativeStackNavigator();

const Router = () => {
  const [initialRouteName, setInitialRouteName] = useState("Login");
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CustomStatusBar backgroundColor="transparent" />
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShown: false,
            animation: "none",
          }}
        >
          {/* <Stack.Screen name="AppSplashScreen" component={AppSplashScreen} /> */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="Home" component={CitizenHome} />
          <Stack.Screen name="Complain" component={Complain} />
          <Stack.Screen name="Progress" component={Progress} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
