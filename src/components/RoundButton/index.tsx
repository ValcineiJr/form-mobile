import React from "react";

import { TouchableOpacityProps } from "react-native";

import { Container, ButtonText } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  outline?: boolean;
};

const RoundButton = ({ text, outline = false, ...rest }: Props) => {
  return (
    <Container outline={outline} {...rest}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export default RoundButton;
