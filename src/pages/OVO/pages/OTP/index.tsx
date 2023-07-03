import React from "react";

import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";

import { StatusBar } from "expo-status-bar";

import Header from "@pages/OVO/components/Header";
import NavigationHeader from "@pages/OVO/components/NavigationHeader";

import { Container, Content, Body, Inputs, OTPInput } from "./styles";
import H1 from "@pages/OVO/components/H1";
import SquareButton from "@pages/OVO/components/SquareButton";
import Observation from "@pages/OVO/components/Observation";

const OTP: React.FC = () => {
  const { setOptions, goBack, navigate }: any = useNavigation();

  setOptions({
    headerShown: true,
    headerShadowVisible: false,
    headerTitle: "",
    headerLeft: () => <NavigationHeader onPress={goBack} />,
  });

  return (
    <Container>
      <StatusBar style="dark" />

      <Content>
        <Header
          source={require("@assets/lottie/otp.json")}
          h1="Verificação OTP"
          h2="Um código de autenticação foi enviado para +62 877*****36"
        />
        <Body>
          <H1 text="Digite OTP" />
          <Inputs>
            <OTPInput maxLength={1} />
            <OTPInput maxLength={1} />
            <OTPInput maxLength={1} />
            <OTPInput maxLength={1} />
          </Inputs>
          <SquareButton text="Verificar" />
          <Observation text="Reenviar OTP em" colorText="18 Segundos" />
        </Body>
      </Content>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          height: 250,
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: -1,
        }}
        colors={["#fff", "#40128B40"]}
      />
    </Container>
  );
};

export default OTP;
