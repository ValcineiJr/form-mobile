import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const HEIGHT = 68;
export const MARGIN_BOTTOM = 12;

export const Container = styled(Animated.View)`
  position: absolute;

  left: 0;
  right: 0;

  /* margin-bottom: 12px; */
`;

export const CardBody = styled.View`
  background-color: #4e4c4e;

  padding: 16px;

  width: 100%;
  height: ${HEIGHT}px;

  border-radius: 8px;

  align-items: center;
`;

export const CardTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  font-family: "Poppins";
`;
