import type { DefineComponent } from 'vue';

export interface ChartBarHorizontalAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarHorizontalAxis: DefineComponent<ChartBarHorizontalAxisProps>;

export default ChartBarHorizontalAxis;
export { ChartBarHorizontalAxis };
