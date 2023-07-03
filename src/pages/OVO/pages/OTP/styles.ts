import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #fff;
`;

export const Content = styled.View`
  flex: 1;

  padding: 0 22px;

  padding-bottom: 150px;
`;

export const Body = styled.View`
  margin-top: 56px;

  align-items: center;
`;

export const Inputs = styled.View`
  flex-direction: row;

  margin-top: 12px;
  margin-bottom: 20px;

  gap: 10px;
`;

export const OTPInput = styled.TextInput`
  width: 45px;

  height: 45px;

  border-color: #909090;
  border-width: 1px;

  background-color: #fff;

  elevation: 6;

  border-radius: 10px;

  font-size: 24px;
  font-family: "Poppins";
  color: #909090;

  justify-content: center;
  align-items: center;

  text-align: center;
`;
