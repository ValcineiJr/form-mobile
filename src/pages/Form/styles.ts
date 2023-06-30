import styled from "styled-components/native";

import Animated from "react-native-reanimated";

type Indicator = {
  step: number;
};

export const Container = styled(Animated.View)`
  flex: 1;
  background-color: #f2f2f5;

  padding: 16px;
  padding-top: 48px;
`;

export const Input = styled.TextInput`
  background-color: #fff;

  width: 100%;
  height: 0;

  elevation: 2;
`;

export const InputContainer = styled.View`
  background-color: #fff;
  padding: 16px;
`;

export const Label = styled.Text`
  color: #222;
`;

export const IndicatorContainer = styled.View`
  width: 100%;
  height: 4px;
  background-color: grey;
`;

export const IndicatorFill = styled.View<Indicator>`
  width: ${({ step }) => (step === 1 ? "33" : step === 2 ? "50" : "100")}%;
  height: 4px;
  background-color: blue;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;

  justify-content: space-evenly;
`;
