import type { DefineComponent } from 'vue';

export interface ChartLineSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineSquare: DefineComponent<ChartLineSquareProps>;

export default ChartLineSquare;
export { ChartLineSquare };
