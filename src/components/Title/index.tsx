import React from "react";
import { TextProps } from "react-native";

import { Container } from "./styles";

interface LabelProps extends TextProps {
  text: string;
}

const Title = ({ text, ...rest }: LabelProps) => {
  return <Container {...rest}>{text}</Container>;
};

export default Title;
