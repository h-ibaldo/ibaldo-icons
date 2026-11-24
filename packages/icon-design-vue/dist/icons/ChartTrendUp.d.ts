import type { DefineComponent } from 'vue';

export interface ChartTrendUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartTrendUp: DefineComponent<ChartTrendUpProps>;

export default ChartTrendUp;
export { ChartTrendUp };
