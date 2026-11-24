import type { DefineComponent } from 'vue';

export interface MinusSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MinusSquare: DefineComponent<MinusSquareProps>;

export default MinusSquare;
export { MinusSquare };
