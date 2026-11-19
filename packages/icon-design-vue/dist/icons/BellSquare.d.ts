import type { DefineComponent } from 'vue';

export interface BellSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSquare: DefineComponent<BellSquareProps>;

export default BellSquare;
export { BellSquare };
