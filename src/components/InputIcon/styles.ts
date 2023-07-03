import styled from "styled-components/native";

type Props = {
  inputColor?: string;
};

export const InputContainer = styled.View`
  width: 100%;

  padding: 8px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 10px;
`;

export const Input = styled.TextInput<Props>`
  border: none;

  flex: 1;

  height: 40px;

  color: ${({ inputColor }) => inputColor};
`;

export const InputLabel = styled.Text<Props>`
  margin-left: 34px;

  font-family: "Poppins";
  font-weight: 500;
  font-size: 12px;
  color: ${({ inputColor }) => inputColor};
`;

export const Border = styled.View<Props>`
  width: 100%;

  height: 1px;

  background-color: ${({ inputColor }) => inputColor};

  position: absolute;
  bottom: 0;
`;

export const AnimatedInputContainer = styled.View`
  flex: 1;

  height: 40px;

  position: relative;
`;
