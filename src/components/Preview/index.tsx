import React from "react";
import { View } from "react-native";
import Label from "../Label";

import { Image } from "./styles";

interface PreviewProps {
  text: string;
}

const Preview = ({ text }: PreviewProps) => {
  return (
    <>
      <Label text={text} />
      <Image source={{ uri: "https://github.com/valcineijr.png" }} />
    </>
  );
};

export default Preview;
