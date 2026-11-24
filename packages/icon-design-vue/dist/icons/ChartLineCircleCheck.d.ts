import type { DefineComponent } from 'vue';

export interface ChartLineCircleCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineCircleCheck: DefineComponent<ChartLineCircleCheckProps>;

export default ChartLineCircleCheck;
export { ChartLineCircleCheck };
