import "react-native-gesture-handler";

import { useFonts } from "expo-font";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "./pages/SignUp";
import Initial from "./pages/Initial";
import OTP from "./pages/OTP";

const Stack = createNativeStackNavigator();

function OVO() {
  const [fontsLoaded] = useFonts({
    Poppins: require("@assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
  );
}

export default OVO;
