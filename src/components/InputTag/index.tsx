import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

export function InputTag({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor="#A0A0A7"
      {...rest}
    />
  );
}
