import type { DefineComponent } from 'vue';

export interface ChartLineSquareDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineSquareDot: DefineComponent<ChartLineSquareDotProps>;

export default ChartLineSquareDot;
export { ChartLineSquareDot };
