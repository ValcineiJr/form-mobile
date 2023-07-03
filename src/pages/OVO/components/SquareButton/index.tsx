import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, ButtonText } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  width?: number;
};

const SquareButton = ({ text, width = 258, ...rest }: Props) => {
  return (
    <Container {...rest} width={width} activeOpacity={0.7}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export default SquareButton;
