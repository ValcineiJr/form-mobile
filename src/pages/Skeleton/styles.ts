import { Dimensions } from "react-native";
import styled from "styled-components/native";
const cardWidth = Dimensions.get("window").width * 0.8;

export const Card = styled.View`
  background-color: #fff;
  padding: 16px;

  width: ${cardWidth}px;

  border-radius: 8px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #2b2b2b;
`;
