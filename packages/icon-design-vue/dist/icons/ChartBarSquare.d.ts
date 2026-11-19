import type { DefineComponent } from 'vue';

export interface ChartBarSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarSquare: DefineComponent<ChartBarSquareProps>;

export default ChartBarSquare;
export { ChartBarSquare };
