import React from "react";

import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import SquareButton from "@pages/OVO/components/SquareButton";
import InputIcon from "@components/InputIcon";

import { Container, Content } from "./styles";
import Observation from "@pages/OVO/components/Observation";
import Header from "@pages/OVO/components/Header";
import NavigationHeader from "@pages/OVO/components/NavigationHeader";

const SignUp: React.FC = () => {
  const { setOptions, goBack, navigate }: any = useNavigation();

  setOptions({
    headerShown: true,
    headerShadowVisible: false,
    headerTitle: "",
    headerLeft: () => <NavigationHeader onPress={goBack} />,
  });

  const navigateTo = (page: string) => {
    navigate(page);
  };

  return (
    <Container>
      <StatusBar style="dark" />

      <Content>
        <Header
          source={require("@assets/lottie/login.json")}
          h1="Cadastrar"
          h2="Vamos começar a criar sua conta"
        />
        <InputIcon
          icon="envelope"
          label="Digite seu e-mail"
          iconColor="#40128b"
          inputColor="#1d1d1d"
          styleContent={{ marginTop: 34, marginBottom: 25 }}
        />
        <InputIcon
          icon="mobile-phone"
          label="Digite seu número de telefone"
          iconColor="#40128b"
          inputColor="#1d1d1d"
          iconSize={45}
          styleContent={{ marginBottom: 25 }}
        />
        <SquareButton onPress={() => navigateTo("OTP")} text="ENVIAR OTP" />
        <Observation text="Já tem uma conta?" colorText="login" />
      </Content>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          height: 363,
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

export default SignUp;
