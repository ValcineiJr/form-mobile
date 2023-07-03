import "react-native-gesture-handler";

import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Form from "@pages/Form";
import Animations from "@pages/Animations";
import Skeleton from "@pages/Skeleton";
import OVO from "@pages/OVO";
import AnimatedList from "@pages/AnimatedList";

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("@assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Ovo" component={OVO} />
        {/* <Stack.Screen name="AnimatedList" component={AnimatedList} /> */}
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Animation" component={Animations} />
        <Stack.Screen name="Skeleton" component={Skeleton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
