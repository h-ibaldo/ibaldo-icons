import type { DefineComponent } from 'vue';

export interface CheckSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSquare: DefineComponent<CheckSquareProps>;

export default CheckSquare;
export { CheckSquare };
