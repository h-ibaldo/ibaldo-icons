import type { DefineComponent } from 'vue';

export interface ChartTrendUpCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpCircle: DefineComponent<ChartTrendUpCircleProps>;

export default ChartTrendUpCircle;
export { ChartTrendUpCircle };
