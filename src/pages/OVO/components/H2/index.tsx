import React from "react";

import { Text } from "./styles";

type Props = {
  text: string;
};

const H2 = ({ text }: Props) => {
  return <Text>{text}</Text>;
};

export default H2;
