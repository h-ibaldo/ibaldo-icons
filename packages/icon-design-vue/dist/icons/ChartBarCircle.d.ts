import type { DefineComponent } from 'vue';

export interface ChartBarCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarCircle: DefineComponent<ChartBarCircleProps>;

export default ChartBarCircle;
export { ChartBarCircle };
