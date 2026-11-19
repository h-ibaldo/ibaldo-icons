import type { DefineComponent } from 'vue';

export interface ChartTrendUpSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpSquare: DefineComponent<ChartTrendUpSquareProps>;

export default ChartTrendUpSquare;
export { ChartTrendUpSquare };
