import React from "react";

import {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Moveable from "@components/Moveable";

import { Container, Header, List } from "./styles";

import { CARDS } from "src/data/cards";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const listToObject = (list: typeof CARDS) => {
  const listOfCards = Object.values(list);

  const object: any = {};

  listOfCards.forEach((card, index) => {
    object[card.id] = index;
  });

  return object;
};

const AnimatedList: React.FC = () => {
  const scrollY = useSharedValue(0);
  const cardsPosition = useSharedValue(listToObject(CARDS));

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Container>
        <Header></Header>
        <List
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{ height: CARDS.length * 68 }}
        >
          {CARDS.map((item) => (
            <Moveable
              cardsPosition={cardsPosition}
              scrollY={scrollY}
              key={item.id}
              data={item}
              cardsCount={CARDS.length}
            />
          ))}
        </List>
      </Container>
    </GestureHandlerRootView>
  );
};

export default AnimatedList;
