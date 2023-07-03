import { Dimensions } from "react-native";

import styled from "styled-components/native";

import BackgroundSVG from "@assets/background.svg";

const width = Dimensions.get("window").width;

export const Background = styled(BackgroundSVG)`
  position: absolute;
`;

export const Container = styled.View`
  padding: 20px 32px 0 32px;

  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Form = styled.View`
  width: ${width - 32}px;

  align-items: center;
`;

export const Separator = styled.View`
  width: ${width - 80}px;

  flex-direction: row;

  justify-content: center;

  align-items: center;
`;

export const SeparatorText = styled.Text`
  padding: 8px;

  background-color: transparent;

  color: white;
`;

export const SeparatorLine = styled.View`
  flex: 1;
  height: 1px;
  background-color: white;
`;

export const HelpText = styled.Text`
  color: #146c94;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 12px;
`;

export const Logo = styled.Text`
  color: #fff;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 50px;

  margin-bottom: 80px;
`;
