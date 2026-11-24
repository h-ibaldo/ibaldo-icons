import type { DefineComponent } from 'vue';

export interface ChartBarHorizontalStackedAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarHorizontalStackedAxis: DefineComponent<ChartBarHorizontalStackedAxisProps>;

export default ChartBarHorizontalStackedAxis;
export { ChartBarHorizontalStackedAxis };
