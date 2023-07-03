import styled, { css } from "styled-components/native";

type ContainerProps = {
  outline: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;

  border-radius: 25px;

  padding: 13px;

  justify-content: center;
  align-items: center;

  margin: 25px 0;

  ${({ outline }) =>
    outline
      ? css`
          border-width: 1px;
          border-color: white;
          background-color: transparent;
        `
      : css`
          background-color: #00b0b7;
        `}
`;

export const ButtonText = styled.Text`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 12px;
  color: white;
`;
