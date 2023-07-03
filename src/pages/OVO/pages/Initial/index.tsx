import React from "react";

import { StatusBar } from "expo-status-bar";

import InputIcon from "@components/InputIcon";
import RoundButton from "@components/RoundButton";

import {
  Background,
  Container,
  Form,
  Separator,
  SeparatorText,
  SeparatorLine,
  HelpText,
  Logo,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const Initial = () => {
  const { navigate }: any = useNavigation();

  const navigateTo = (page: string) => {
    navigate(page);
  };

  return (
    <Container>
      <StatusBar style="light" />
      <Background />
      <Logo>LOGO</Logo>
      <Form>
        <InputIcon icon="user-circle" label="Digite seu e-mail" />
        <RoundButton outline activeOpacity={0.7} text="Entrar" />
        <Separator>
          <SeparatorLine />
          <SeparatorText>OU</SeparatorText>
          <SeparatorLine />
        </Separator>
        <RoundButton
          activeOpacity={0.7}
          onPress={() => navigateTo("SignUp")}
          text="Cadastrar"
        />
        <HelpText>Precisa de ajuda?</HelpText>
      </Form>
    </Container>
  );
};

export default Initial;
