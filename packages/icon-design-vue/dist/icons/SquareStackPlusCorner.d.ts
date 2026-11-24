import type { DefineComponent } from 'vue';

export interface SquareStackPlusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackPlusCorner: DefineComponent<SquareStackPlusCornerProps>;

export default SquareStackPlusCorner;
export { SquareStackPlusCorner };
