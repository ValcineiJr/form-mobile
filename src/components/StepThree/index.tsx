import React from "react";
import { useForm, useController } from "react-hook-form";

import { Container } from "./styles";
import Title from "../Title";
import Input from "../Input";
import WhiteContainer from "../WhiteContainer";
import { KeyboardAvoidingView } from "react-native";

const StepThree: React.FC = () => {
  const { control, handleSubmit } = useForm();
  return (
    <Container>
      <KeyboardAvoidingView behavior="position" enabled>
        <Title text="Preço Combustível" />
        <WhiteContainer>
          <Input placeholder="0" name="Gasolina Comum" control={control} />
        </WhiteContainer>

        <WhiteContainer>
          <Input placeholder="0" name="Gasolina Aditivada" control={control} />
        </WhiteContainer>

        <WhiteContainer>
          <Input placeholder="0" name="Gasolina Premium" control={control} />
        </WhiteContainer>
        <WhiteContainer>
          <Input placeholder="0" name="Etanol Comum" control={control} />
        </WhiteContainer>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default StepThree;
