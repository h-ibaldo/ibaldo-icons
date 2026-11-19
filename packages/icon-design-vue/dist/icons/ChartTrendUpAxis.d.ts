import type { DefineComponent } from 'vue';

export interface ChartTrendUpAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpAxis: DefineComponent<ChartTrendUpAxisProps>;

export default ChartTrendUpAxis;
export { ChartTrendUpAxis };
