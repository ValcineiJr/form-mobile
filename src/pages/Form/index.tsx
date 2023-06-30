import { useState } from "react";

import { TouchableWithoutFeedback } from "react-native";

import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";

import { useForm } from "react-hook-form";
import { useFonts } from "expo-font";

import { Button } from "react-native-paper";

import StepOne from "../../components/StepOne";
import StepTwo from "../../components/StepTwo";
import StepThree from "../../components/StepThree";

import {
  Container,
  Input,
  IndicatorContainer,
  IndicatorFill,
  ButtonGroup,
} from "./styles";

import theme from "../../styles/theme";

export default function Form() {
  const { handleSubmit, control } = useForm();

  const [step, setStep] = useState(1);

  const [fontsLoaded] = useFonts({
    Poppins: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });

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
