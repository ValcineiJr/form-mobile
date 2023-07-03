import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #151315;
`;

export const Header = styled.View`
  height: 180px;
  background-color: #212022;
`;

export const List = styled(Animated.ScrollView)`
  flex: 1;
  padding: 32px;

  position: relative;
`;
