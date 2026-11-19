import type { DefineComponent } from 'vue';

export interface ChartBarTrendUpThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarTrendUpThin: DefineComponent<ChartBarTrendUpThinProps>;

export default ChartBarTrendUpThin;
export { ChartBarTrendUpThin };
