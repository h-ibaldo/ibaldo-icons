import type { DefineComponent } from 'vue';

export interface ChartLineCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineCircle: DefineComponent<ChartLineCircleProps>;

export default ChartLineCircle;
export { ChartLineCircle };
