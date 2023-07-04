import React from "react";

import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import Header from "@pages/OVO/components/Header";
import SquareButton from "@pages/OVO/components/SquareButton";
import InputIcon from "@components/InputIcon";
import NavigationHeader from "@pages/OVO/components/NavigationHeader";

import { Container, Content } from "./styles";

const Password: React.FC = () => {
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
          source={require("@assets/lottie/password.json")}
          h1="Definir senha"
          h2="Criar uma senha para sua conta"
        />

        <InputIcon
          icon="eye"
          label="Digite sua senha"
          iconColor="#40128b"
          inputColor="#1d1d1d"
          styleContent={{ marginTop: 34, marginBottom: 25 }}
        />
        <InputIcon
          icon="mobile-phone"
          label="Confirme sua senha"
          iconColor="#40128b"
          inputColor="#1d1d1d"
          iconSize={45}
          styleContent={{ marginBottom: 25 }}
        />

        <SquareButton onPress={() => navigateTo("Initial")} text="Confirmar" />
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

export default Password;
