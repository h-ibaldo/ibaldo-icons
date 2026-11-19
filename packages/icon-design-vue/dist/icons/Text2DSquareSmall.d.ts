import type { DefineComponent } from 'vue';

export interface Text2DSquareSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Text2DSquareSmall: DefineComponent<Text2DSquareSmallProps>;

export default Text2DSquareSmall;
export { Text2DSquareSmall };
