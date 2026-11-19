import type { DefineComponent } from 'vue';

export interface ChartTrendUpCircleCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartTrendUpCircleCheck: DefineComponent<ChartTrendUpCircleCheckProps>;

export default ChartTrendUpCircleCheck;
export { ChartTrendUpCircleCheck };
