import type { DefineComponent } from 'vue';

export interface ChartBarThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarThin: DefineComponent<ChartBarThinProps>;

export default ChartBarThin;
export { ChartBarThin };
