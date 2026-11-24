import type { DefineComponent } from 'vue';

export interface ChartBarMixedThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarMixedThin: DefineComponent<ChartBarMixedThinProps>;

export default ChartBarMixedThin;
export { ChartBarMixedThin };
