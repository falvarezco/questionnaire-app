const CREATIVE_DIMENSIONS = {
  width: 375,
  height: 812,
};

export const toVH = (px: number) => (px / CREATIVE_DIMENSIONS.height) * 100;
export const toVHL = (px: number) => (px / CREATIVE_DIMENSIONS.width) * 100;

export const toVW = (px: number) => (px / CREATIVE_DIMENSIONS.width) * 100;
export const toVWL = (px: number) => (px / CREATIVE_DIMENSIONS.height) * 100;

export default {
  toVH,
  toVHL,
  toVW,
  toVWL,
};
