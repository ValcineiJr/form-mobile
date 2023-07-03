import React from "react";

import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import Feather from "@expo/vector-icons/Feather";

type Props = TouchableOpacityProps;

const NavigationHeader = ({ ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={1}>
      <Feather size={50} color="#40128B" name="chevron-left" />
    </TouchableOpacity>
  );
};

export default NavigationHeader;
