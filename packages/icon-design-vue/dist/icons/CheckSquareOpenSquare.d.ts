import type { DefineComponent } from 'vue';

export interface CheckSquareOpenSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSquareOpenSquare: DefineComponent<CheckSquareOpenSquareProps>;

export default CheckSquareOpenSquare;
export { CheckSquareOpenSquare };
