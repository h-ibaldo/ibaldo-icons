import type { DefineComponent } from 'vue';

export interface ChartBarSquareDotThinProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareDotThin: DefineComponent<ChartBarSquareDotThinProps>;

export default ChartBarSquareDotThin;
export { ChartBarSquareDotThin };
