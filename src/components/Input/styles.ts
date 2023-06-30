import styled from "styled-components/native";

type InputProps = {
  isFocused: boolean;
};

export const Container = styled.TextInput<InputProps>`
  width: 100%;
  height: 40px;

  border-bottom-width: 1px;
  border-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.primary : "#e3e3e5"};

  color: #191c1f;

  font-family: "Poppins";
  font-size: 16px;
`;

export const InputLabel = styled.Text`
  font-family: "Poppins";
  font-size: 14px;
`;

export const InputComment = styled.Text`
  font-family: "Poppins";
  margin-top: 8px;
  font-size: 14px;
`;
