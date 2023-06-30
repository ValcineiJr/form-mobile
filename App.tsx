import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import { useForm } from "react-hook-form";
import { useFonts } from "expo-font";
import { ProgressBar, MD3Colors, Button } from "react-native-paper";

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

import { useState } from "react";
import StepOne from "./src/components/StepOne";
import StepTwo from "./src/components/StepTwo";
import StepThree from "./src/components/StepThree";

import {
  Container,
  Input,
  InputContainer,
  Label,
  IndicatorContainer,
  IndicatorFill,
  ButtonGroup,
} from "./style";
import { ThemeProvider } from "styled-components";

import theme from "./src/styles/theme";

const AnimatedInputText = Animated.createAnimatedComponent(Input);

export default function App() {
  const { handleSubmit, control } = useForm();

  const animatedPadding = useSharedValue(0);
  const animatedWidth = useSharedValue(0);
  const animatedHeight = useSharedValue(0);

  const [step, setStep] = useState(1);

  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  const config = {
    duration: 500,
  };

  const style = useAnimatedStyle(() => {
    return {
      //  width: withTiming(animatedWidth.value, config),
      paddingLeft: withTiming(animatedPadding.value, config),
      height: withTiming(animatedHeight.value, config),
    };
  });

  const handleExpand = () => {
    animatedPadding.value = 16;
    // animatedWidth.value = "100%";
    animatedHeight.value = 40;
  };

  const handleContrai = () => {
    animatedPadding.value = 0;
    // animatedWidth.value = "100%";
    animatedHeight.value = 0;
  };

  if (!fontsLoaded) {
    return null;
  }

  const maxSteps = 3;

  const StepFoward = () => {
    setStep((state) => (state < maxSteps ? (state += 1) : maxSteps));
  };

  const StepBack = () => {
    setStep((state) => (state > 1 ? (state -= 1) : 1));
  };

  const RenderSteps = () => {
    if (step === 1) return <StepOne />;
    if (step === 2) return <StepTwo />;
    if (step === 3) return <StepThree control={control} />;
  };

  const StepsIndicator = () => {
    return (
      <IndicatorContainer>
        <IndicatorFill step={step} />
      </IndicatorContainer>
    );
  };

  const StepsButtons = () => {
    return (
      <ButtonGroup>
        <Button
          icon="arrow-left"
          disabled={step <= 1 ? true : false}
          mode="contained"
          onPress={StepBack}
          buttonColor="#258AFF"
        >
          Voltar
        </Button>
        <Button
          contentStyle={{ flexDirection: "row-reverse" }}
          icon="arrow-right"
          mode="contained"
          onPress={step < maxSteps ? StepFoward : handleSubmit(onSubmit)}
          buttonColor="#258AFF"
        >
          {step < maxSteps ? "Avançar" : "Enviar"}
        </Button>
      </ButtonGroup>
    );
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <Container>
          <StatusBar backgroundColor="#fff" />

          <StepsIndicator />
          <RenderSteps />
          <StepsButtons />
        </Container>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
}
