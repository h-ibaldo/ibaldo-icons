import type { DefineComponent } from 'vue';

export interface CheckDoubleSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckDoubleSquare: DefineComponent<CheckDoubleSquareProps>;

export default CheckDoubleSquare;
export { CheckDoubleSquare };
