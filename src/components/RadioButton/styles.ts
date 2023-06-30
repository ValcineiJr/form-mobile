import styled from "styled-components/native";

export const RadioContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;

  align-items: center;
`;

export const RadioLabel = styled.Text`
  font-family: "Poppins";
  font-weight: 700;
`;
