import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import Router from "./src/Router";
import {
  useFonts as useRoboto,
  Roboto_400Regular as Roboto,
  Roboto_700Bold as Roboto_700Bold,
  Roboto_400Regular_Italic as RobotoItalic,
  Roboto_700Bold_Italic as RobotoBoldItalic,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import {
  useFonts as useOpenSans,
  OpenSans_400Regular as OpenSans,
  OpenSans_700Bold as OpenSansBold,
  OpenSans_400Regular_Italic as OpenSansItalic,
  OpenSans_700Bold_Italic as OpenSansBoldItalic,
  OpenSans_600SemiBold,
} from "@expo-google-fonts/open-sans";
import {
  useFonts as useLato,
  Lato_400Regular as Lato,
  Lato_700Bold as LatoBold,
  Lato_400Regular_Italic as LatoItalic,
  Lato_700Bold_Italic as LatoBoldItalic,
} from "@expo-google-fonts/lato";
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular as Montserrat,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold as MontserratBold,
} from "@expo-google-fonts/montserrat";
import {
  useFonts as useRaleway,
  Raleway_400Regular as Raleway,
  Raleway_700Bold as RalewayBold,
  Raleway_400Regular_Italic as RalewayItalic,
  Raleway_700Bold_Italic as RalewayBoldItalic,
} from "@expo-google-fonts/raleway";
import {
  useFonts as usePlayfairDisplay,
  PlayfairDisplay_400Regular as PlayfairDisplay,
  PlayfairDisplay_700Bold as PlayfairDisplay_700Bold,
  PlayfairDisplay_400Regular_Italic as PlayfairDisplayItalic,
  PlayfairDisplay_700Bold_Italic as PlayfairDisplayBoldItalic,
} from "@expo-google-fonts/playfair-display";
import {
  useFonts as usePoppins,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular as Poppins,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
  Poppins_400Regular_Italic as PoppinsItalic,
  Poppins_700Bold_Italic as PoppinsBoldItalic,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useCabin,
  Cabin_400Regular as Cabin,
  Cabin_700Bold as CabinBold,
  Cabin_400Regular_Italic as CabinItalic,
  Cabin_700Bold_Italic as CabinItalicBold,
} from "@expo-google-fonts/cabin";
import {
  useFonts as useQuicksand,
  Quicksand_400Regular as Quicksand,
  Quicksand_700Bold as QuicksandBold,
  Quicksand_400Regular_Italic as QuicksandItalic,
  Quicksand_700Bold_Italic as QuicksandBoldItalic,
} from "@expo-google-fonts/quicksand";

import AppLoading from "expo-app-loading";
// import { MenuProvider } from "react-native-popup-menu";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.maxFontSizeMultiplier = 1;
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.maxFontSizeMultiplier = 1;

export default function App() {
  // Load each font using its respective useFonts hook
  const [robotoFontsLoaded] = useRoboto({
    Roboto,
    "Roboto 500": Roboto_500Medium,
    "Roboto Bold": Roboto_700Bold,
    "Roboto Italic": RobotoItalic,
    "Roboto Bold Italic": RobotoBoldItalic,
  });

  const [openSansFontsLoaded] = useOpenSans({
    "Open Sans": OpenSans,
    "Open Sans 600": OpenSans_600SemiBold,
    "Open Sans Bold": OpenSansBold,
    "Open Sans Italic": OpenSansItalic,
    "Open Sans Bold Italic": OpenSansBoldItalic,
  });

  const [latoFontsLoaded] = useLato({
    Lato,
    "Lato Bold": LatoBold,
    "Lato Italic": LatoItalic,
    "Lato Bold Italic": LatoBoldItalic,
  });

  const [montserratFontsLoaded] = useMontserrat({
    Montserrat,

    "Montserrat Bold": MontserratBold,
    "Montserrat 100": Montserrat_100Thin,
    "Montserrat 200": Montserrat_200ExtraLight,
    "Montserrat 300": Montserrat_300Light,
    "Montserrat 500": Montserrat_500Medium,
    "Montserrat 600": Montserrat_600SemiBold,
  });

  const [ralewayFontsLoaded] = useRaleway({
    Raleway,
    "Raleway Bold": RalewayBold,
    "Raleway Italic": RalewayItalic,
    "Raleway Bold Italic": RalewayBoldItalic,
  });

  const [playfairDisplayFontsLoaded] = usePlayfairDisplay({
    "Playfair Display": PlayfairDisplay,
    "Playfair Display Bold": PlayfairDisplay_700Bold,
    "Playfair Display Italic": PlayfairDisplayItalic,
    "Playfair Display Bold Italic": PlayfairDisplayBoldItalic,
  });

  const [poppinsFontsLoaded] = usePoppins({
    "Poppins-Thin": Poppins_100Thin,
    "Poppins-ExtraLight": Poppins_200ExtraLight,
    "Poppins-Light": Poppins_300Light,
    "Poppins-Regular": Poppins,
    "Poppins-Medium": Poppins_500Medium,
    "Poppins-SemiBold": Poppins_600SemiBold,
    "Poppins-Bold": Poppins_700Bold,
    "Poppins Bold": Poppins_700Bold,
    "Poppins-ExtraBold": Poppins_800ExtraBold,
    "Poppins-Black": Poppins_900Black,
    "Poppins Italic": PoppinsItalic,
    "Poppins Bold Italic": PoppinsBoldItalic,
    Poppins,
  });

  const [cabinFontsLoaded] = useCabin({
    Cabin,
    "Cabin Bold": CabinBold,
    "Cabin Italic": CabinItalic,
    "Cabin Bold Italic": CabinItalicBold,
  });

  const [quicksandFontsLoaded] = useQuicksand({
    Quicksand,
    "Quicksand Bold": QuicksandBold,
    // "Quicksand Italic": QuicksandItalic,
    // "Quicksand Bold Italic": QuicksandBoldItalic,
  });
  if (
    !robotoFontsLoaded ||
    !openSansFontsLoaded ||
    !latoFontsLoaded ||
    !montserratFontsLoaded ||
    !ralewayFontsLoaded ||
    !playfairDisplayFontsLoaded ||
    !poppinsFontsLoaded ||
    !cabinFontsLoaded ||
    !quicksandFontsLoaded
  ) {
    return <AppLoading />;
  }
  return <Router />;
}
