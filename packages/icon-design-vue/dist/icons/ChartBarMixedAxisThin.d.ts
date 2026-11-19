import type { DefineComponent } from 'vue';

export interface ChartBarMixedAxisThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarMixedAxisThin: DefineComponent<ChartBarMixedAxisThinProps>;

export default ChartBarMixedAxisThin;
export { ChartBarMixedAxisThin };
