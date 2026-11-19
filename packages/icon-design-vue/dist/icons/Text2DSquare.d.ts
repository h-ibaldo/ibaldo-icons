import type { DefineComponent } from 'vue';

export interface Text2DSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Text2DSquare: DefineComponent<Text2DSquareProps>;

export default Text2DSquare;
export { Text2DSquare };
