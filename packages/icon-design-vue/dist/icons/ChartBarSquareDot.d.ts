import type { DefineComponent } from 'vue';

export interface ChartBarSquareDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareDot: DefineComponent<ChartBarSquareDotProps>;

export default ChartBarSquareDot;
export { ChartBarSquareDot };
