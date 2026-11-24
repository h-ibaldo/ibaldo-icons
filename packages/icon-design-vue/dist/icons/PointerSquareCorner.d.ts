import type { DefineComponent } from 'vue';

export interface PointerSquareCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerSquareCorner: DefineComponent<PointerSquareCornerProps>;

export default PointerSquareCorner;
export { PointerSquareCorner };
