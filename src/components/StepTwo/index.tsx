import React from "react";
import { View } from "react-native";

import { Container } from "./styles";
import Title from "../Title";
import Preview from "../Preview";
import Label from "../Label";
import RadioButtonComponent from "../RadioButton";
import WhiteContainer from "../WhiteContainer";

const StepTwo: React.FC = () => {
  const [obs, setObs] = React.useState("sem placar de preço");

  return (
    <Container>
      <Title text="Fotos Automotivas" />
      <WhiteContainer>
        <Preview text="Foto PP (Placar de Preço)" />
      </WhiteContainer>

      <WhiteContainer>
        <Label text="Observação PP (Placar de Preço)" />
        <RadioButtonComponent
          status={obs}
          setStatus={setObs}
          value="sem placar de preço"
          text="Sem placar de preço"
        />
        <RadioButtonComponent
          status={obs}
          setStatus={setObs}
          value="sem divulgação de preço"
          text="Sem divulgação de preço"
        />
      </WhiteContainer>
      <WhiteContainer>
        <Preview text="Foto QA (Quadro de Aviso)" />
      </WhiteContainer>

      <WhiteContainer>
        <Preview text="Observação Foto QA (Quadro de Aviso)" />
      </WhiteContainer>
    </Container>
  );
};

export default StepTwo;
