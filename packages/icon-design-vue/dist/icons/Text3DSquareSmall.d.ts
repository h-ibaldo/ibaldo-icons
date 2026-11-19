import type { DefineComponent } from 'vue';

export interface Text3DSquareSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Text3DSquareSmall: DefineComponent<Text3DSquareSmallProps>;

export default Text3DSquareSmall;
export { Text3DSquareSmall };
