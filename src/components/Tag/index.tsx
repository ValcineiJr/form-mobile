import { Text } from "react-native";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import Animated, { FadeIn, Layout } from "react-native-reanimated";

import { styles } from "./styles";

type Props = {
  title: string;
  onRemove: () => void;
};

export function Tag({ title, onRemove }: Props) {
  return (
    <Menu>
      <MenuTrigger
        triggerOnLongPress
        onAlternativeAction={() => console.log("Clique normal")}
      >
        <Animated.View
          entering={FadeIn}
          layout={Layout}
          style={styles.container}
        >
          <Text style={styles.title}>#{title}</Text>
        </Animated.View>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={onRemove}>
          <Text style={{ color: "red" }}>Delete</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
}
