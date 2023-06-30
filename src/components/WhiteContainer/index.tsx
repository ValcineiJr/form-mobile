import React, { ReactNode } from "react";

import { Container } from "./styles";

interface WhiteContainerProps {
  children: ReactNode;
}

const WhiteContainer = ({ children }: WhiteContainerProps) => {
  return <Container>{children}</Container>;
};

export default WhiteContainer;
