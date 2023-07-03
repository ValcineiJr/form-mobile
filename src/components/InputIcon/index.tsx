import React, { useEffect, useState } from "react";

import { TextInputProps, ViewStyle, StyleProp } from "react-native";

import Animated, {
  useSharedValue,
  withTiming,
  interpolate,
  useAnimatedStyle,
  concat,
  runOnJS,
} from "react-native-reanimated";

import FontAwesome5 from "@expo/vector-icons/FontAwesome";

import {
  InputContainer,
  Input,
  InputLabel,
  Wrapper,
  Border,
  AnimatedInputContainer,
} from "./styles";

type Props = TextInputProps & {
  label: string;
  icon: React.ComponentProps<typeof FontAwesome5>["name"];
  iconColor?: string;
  inputColor?: string;
  styleContent?: StyleProp<ViewStyle>;
  iconSize?: number;
};

const InputIcon = ({
  label,
  icon,
  iconColor = "#fff",
  inputColor = "#fff",
  styleContent,
  iconSize = 25,
  ...rest
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const AnimatedBorder = Animated.createAnimatedComponent(Border);
  const borderWidth = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    "worklet";
    return {
      // width: concat(interpolate(borderWidth.value, [0, 1], [0, 100]), "%"),
      // width: interpolate(borderWidth.value, [0, 1], [0, 100]) + "%",

      transform: [{ scaleX: borderWidth.value }],
      backgroundColor: "#00b0b7",
    };
  });

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  useEffect(() => {
    if (isFocused) {
      borderWidth.value = withTiming(1, { duration: 500 });
    } else {
      borderWidth.value = withTiming(0, { duration: 500 });
    }
  }, [isFocused]);

  return (
    <InputContainer style={styleContent}>
      <InputLabel inputColor={inputColor}>{label}</InputLabel>
      <Wrapper>
        <FontAwesome5 name={icon} size={iconSize} color={iconColor} />
        <AnimatedInputContainer>
          <Input
            inputColor={inputColor}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...rest}
          />
          <Border inputColor={inputColor} />
          <AnimatedBorder style={style} />
        </AnimatedInputContainer>
      </Wrapper>
    </InputContainer>
  );
};

export default InputIcon;
