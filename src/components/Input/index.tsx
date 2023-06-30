import React, { useState } from "react";
import { TextProps } from "react-native";

import { useController } from "react-hook-form";

import { InputLabel, InputComment, Container } from "./styles";

interface InputProps extends TextProps {
  name: string;
  placeholder: string;
  control: any;
}

const Input = ({ name, control, placeholder, ...rest }: InputProps) => {
  const { field } = useController({ control, defaultValue: "", name });
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }
  return (
    <>
      <InputLabel>{name}</InputLabel>
      <Container
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        placeholder={placeholder}
        value={field.value}
        onChangeText={field.onChange}
        {...rest}
      />
      {error !== "" && <InputComment>{error}</InputComment>}
    </>
  );
};

export default Input;
