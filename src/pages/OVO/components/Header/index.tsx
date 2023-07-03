import React from "react";

import Lottie, { AnimationObject } from "lottie-react-native";

import H1 from "../H1";
import H2 from "../H2";

import { LottieImageContainer } from "./styles";

type Props = {
  source:
    | string
    | AnimationObject
    | {
        uri: string;
      };
  h1: string;
  h2: string;
};

const Header = ({ source, h1, h2 }: Props) => {
  return (
    <>
      <LottieImageContainer>
        <Lottie source={source} autoPlay style={{ flex: 1 }} loop={false} />
      </LottieImageContainer>
      <H1 text={h1} />
      <H2 text={h2} />
    </>
  );
};

export default Header;
