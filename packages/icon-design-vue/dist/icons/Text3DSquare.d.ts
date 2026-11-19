import type { DefineComponent } from 'vue';

export interface Text3DSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Text3DSquare: DefineComponent<Text3DSquareProps>;

export default Text3DSquare;
export { Text3DSquare };
