import type { DefineComponent } from 'vue';

export interface CheckSquareCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckSquareCircle: DefineComponent<CheckSquareCircleProps>;

export default CheckSquareCircle;
export { CheckSquareCircle };
