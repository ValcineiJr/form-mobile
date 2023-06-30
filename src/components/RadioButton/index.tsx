import React from "react";

import { RadioButton } from "react-native-paper";

import { RadioContainer, RadioLabel } from "./styles";

interface RadioButtonComponentProps {
  value: string;
  status: any;
  setStatus: (value: any) => void;
  text: string;
}

const RadioButtonComponent = ({
  value,
  status,
  setStatus,
  text,
}: RadioButtonComponentProps) => {
  return (
    <RadioContainer onPress={() => setStatus(value)}>
      <>
        <RadioButton
          value={value}
          status={status === value ? "checked" : "unchecked"}
          onPress={() => setStatus(value)}
        />
        <RadioLabel>{text}</RadioLabel>
      </>
    </RadioContainer>
  );
};

export default RadioButtonComponent;
