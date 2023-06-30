import React from "react";

import {
  View,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Animated, {
  useSharedValue,
  withTiming,
  withRepeat,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Card, Container } from "./styles";

type SkeletonProps = {
  width: number;
  height: number;
  style: StyleProp<ViewStyle>;
};

const Skeleton: React.FC = () => {
  const cardWidth = Dimensions.get("window").width * 0.8;
  const skeWidth = cardWidth - 32;

  const SkeletonComponent = ({ width, height, style }: SkeletonProps) => {
    const translateX = useSharedValue(-width);

    translateX.value = withRepeat(
      withTiming(width, { duration: 1500 }),
      -1,
      false
    );

    const customStyles = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: translateX.value,
          },
        ],
      };
    });

    return (
      <View
        style={StyleSheet.flatten([
          {
            width,
            height,
            backgroundColor: "rgba(0,0,0,0.12)",
            overflow: "hidden",
          },
          style,
        ])}
      >
        <Animated.View
          style={[{ width: "100%", height: "100%" }, customStyles]}
        >
          <LinearGradient
            style={{ width: "100%", height: "100%" }}
            start={{ x: 1, y: 1 }}
            colors={["transparent", "rgba(0,0,0,.05)", "transparent"]}
          />
        </Animated.View>
      </View>
    );
  };

  return (
    <Container>
      <Card>
        <SkeletonComponent
          width={40}
          height={40}
          style={{ borderRadius: 20 }}
        />
        <SkeletonComponent
          width={skeWidth}
          height={40}
          style={{ borderRadius: 8, marginTop: 16 }}
        />
        <SkeletonComponent
          width={skeWidth}
          height={10}
          style={{ borderRadius: 8, marginTop: 16 }}
        />
        <SkeletonComponent
          width={skeWidth}
          height={100}
          style={{ borderRadius: 8, marginTop: 16 }}
        />
        <SkeletonComponent
          width={skeWidth}
          height={10}
          style={{ borderRadius: 8, marginTop: 16 }}
        />
        <SkeletonComponent
          width={skeWidth}
          height={10}
          style={{ borderRadius: 8, marginTop: 16 }}
        />
      </Card>
    </Container>
  );
};

export default Skeleton;
