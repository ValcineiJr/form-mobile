import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text, TextColor } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  colorText: string;
};

const Observation = ({ text, colorText, ...rest }: Props) => {
  return (
    <Container {...rest} activeOpacity={0.7}>
      <Text>{text}</Text>
      <TextColor>{colorText}</TextColor>
    </Container>
  );
};

export default Observation;
