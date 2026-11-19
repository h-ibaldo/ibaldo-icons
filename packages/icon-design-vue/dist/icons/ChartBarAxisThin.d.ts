import type { DefineComponent } from 'vue';

export interface ChartBarAxisThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarAxisThin: DefineComponent<ChartBarAxisThinProps>;

export default ChartBarAxisThin;
export { ChartBarAxisThin };
