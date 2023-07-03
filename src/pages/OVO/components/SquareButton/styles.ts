import styled from "styled-components/native";

type Props = {
  width: number;
};

export const Container = styled.TouchableOpacity<Props>`
  background-color: #40128b;

  padding: 13px;

  border-radius: 10px;

  width: ${({ width }) => width}px;

  margin: 0 auto;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-family: "Poppins";
  font-weight: 400;
  text-align: center;
  color: white;
`;
