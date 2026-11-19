import type { DefineComponent } from 'vue';

export interface CheckSquareOpenCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSquareOpenCircle: DefineComponent<CheckSquareOpenCircleProps>;

export default CheckSquareOpenCircle;
export { CheckSquareOpenCircle };
