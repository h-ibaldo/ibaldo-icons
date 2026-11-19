import type { DefineComponent } from 'vue';

export interface CheckUnderlineSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CheckUnderlineSquare: DefineComponent<CheckUnderlineSquareProps>;

export default CheckUnderlineSquare;
export { CheckUnderlineSquare };
