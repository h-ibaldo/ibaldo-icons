import type { DefineComponent } from 'vue';

export interface ChartBarCircleCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarCircleCheck: DefineComponent<ChartBarCircleCheckProps>;

export default ChartBarCircleCheck;
export { ChartBarCircleCheck };
