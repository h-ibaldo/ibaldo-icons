import type { DefineComponent } from 'vue';

export interface ChartBarDownSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarDownSquare: DefineComponent<ChartBarDownSquareProps>;

export default ChartBarDownSquare;
export { ChartBarDownSquare };
