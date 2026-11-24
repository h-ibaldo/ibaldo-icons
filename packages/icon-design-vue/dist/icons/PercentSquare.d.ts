import type { DefineComponent } from 'vue';

export interface PercentSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PercentSquare: DefineComponent<PercentSquareProps>;

export default PercentSquare;
export { PercentSquare };
