import React, { useState } from "react";

import {
  Container,
  CardBody,
  CardTitle,
  HEIGHT,
  MARGIN_BOTTOM,
} from "./styles";
import {
  SharedValue,
  runOnJS,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type CardProps = {
  id: number;
  title: string;
};

type Props = {
  data: CardProps;
  cardsPosition: SharedValue<number[]>;
  scrollY: SharedValue<number>;
  cardsCount: number;
};

export const CARD_HEIGHT = HEIGHT + MARGIN_BOTTOM;

const Moveable = ({ data, cardsCount, cardsPosition, scrollY }: Props) => {
  const [moving, setMoving] = useState(false);
  const top = useSharedValue(cardsPosition.value[data.id] * CARD_HEIGHT);

  const Card = ({ data }: { data: { id: number; title: string } }) => (
    <CardBody>
      <CardTitle>{moving ? "S" : "N"}</CardTitle>
    </CardBody>
  );

  const longPressGesture = Gesture.LongPress()
    .onStart(() => {
      runOnJS(setMoving)(true);
    })
    .minDuration(200);

  const panGesture = Gesture.Pan()
    .manualActivation(true)
    .onTouchesMove((_, state) => {
      moving ? state.activate() : state.fail();
    })
    .onUpdate((event) => {
      console.log(event.absoluteY);
      top.value = event.absoluteY + scrollY.value;
    });

  const nativeGesture = Gesture.Native();

  const composedGestures = Gesture.Race(
    panGesture,
    longPressGesture,
    nativeGesture
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: top.value - CARD_HEIGHT,
    };
  });

  return (
    <Container style={animatedStyle}>
      <GestureDetector gesture={composedGestures}>
        <Card data={data} />
      </GestureDetector>
    </Container>
  );
};

export default Moveable;
