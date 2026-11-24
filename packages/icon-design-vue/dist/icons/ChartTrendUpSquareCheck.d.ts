import type { DefineComponent } from 'vue';

export interface ChartTrendUpSquareCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpSquareCheck: DefineComponent<ChartTrendUpSquareCheckProps>;

export default ChartTrendUpSquareCheck;
export { ChartTrendUpSquareCheck };
