import type { DefineComponent } from 'vue';

export interface PointerSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerSquare: DefineComponent<PointerSquareProps>;

export default PointerSquare;
export { PointerSquare };
