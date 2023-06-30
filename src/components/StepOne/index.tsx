import React from "react";

import RadioButtonComponent from "../RadioButton";
import Label from "../Label";
import Title from "../Title";
import Preview from "../Preview";

import { Container, Row } from "./styles";
import WhiteContainer from "../WhiteContainer";

const StepOne: React.FC = () => {
  const [checked, setChecked] = React.useState(
    "Recusa total a realização da pesquisa"
  );
  const [size, setSize] = React.useState("pequeno");
  const [proximity, setProximity] = React.useState("sim");

  return (
    <Container>
      <Title text="Foto Panorâmica" />
      <WhiteContainer>
        <Preview text="Foto PR (Panorâmica)" />
      </WhiteContainer>

      <WhiteContainer>
        <Label text="Ocorrência foto PR (Panorâmica)" />
        <RadioButtonComponent
          status={checked}
          setStatus={setChecked}
          value="Recusa total a realização da pesquisa"
          text="Recusa total a realização da pesquisa"
        />
        <RadioButtonComponent
          status={checked}
          setStatus={setChecked}
          value="Instalação existe mais não funciona"
          text="Instalação existe mais não funciona"
        />
        <RadioButtonComponent
          status={checked}
          setStatus={setChecked}
          value="Sem instalação no endereço"
          text="Sem instalação no endereço"
        />
      </WhiteContainer>

      <WhiteContainer>
        <Label text="Tamanho do posto" />

        <Row>
          <RadioButtonComponent
            status={size}
            setStatus={setSize}
            value="pequeno"
            text="Pequeno"
          />
          <RadioButtonComponent
            status={size}
            setStatus={setSize}
            value="medio"
            text="Médio"
          />
          <RadioButtonComponent
            status={size}
            setStatus={setSize}
            value="grande"
            text="Grande"
          />
        </Row>
      </WhiteContainer>

      <WhiteContainer>
        <Label text="Proximidade a outro posto" />
        <Row>
          <RadioButtonComponent
            status={proximity}
            setStatus={setProximity}
            value="sim"
            text="Sim"
          />
          <RadioButtonComponent
            status={proximity}
            setStatus={setProximity}
            value="não"
            text="Não"
          />
        </Row>
      </WhiteContainer>
    </Container>
  );
};

export default StepOne;
