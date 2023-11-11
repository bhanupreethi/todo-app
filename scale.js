import React from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const guidelineBaseHeight = 852;
const guidelineBaseWidth = 393;
// verticalScale used for height, fontSize, margin
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
// horizontalScale used for width, margin
const horizontalScale = (size) => (width / guidelineBaseWidth) * size;

export { verticalScale, horizontalScale };
