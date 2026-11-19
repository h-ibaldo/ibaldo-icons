import type { DefineComponent } from 'vue';

export interface CheckOverlineSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckOverlineSquare: DefineComponent<CheckOverlineSquareProps>;

export default CheckOverlineSquare;
export { CheckOverlineSquare };
