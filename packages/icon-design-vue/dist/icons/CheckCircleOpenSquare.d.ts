import type { DefineComponent } from 'vue';

export interface CheckCircleOpenSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckCircleOpenSquare: DefineComponent<CheckCircleOpenSquareProps>;

export default CheckCircleOpenSquare;
export { CheckCircleOpenSquare };
