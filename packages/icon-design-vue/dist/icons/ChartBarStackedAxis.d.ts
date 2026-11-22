import type { DefineComponent } from 'vue';

export interface ChartBarStackedAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarStackedAxis: DefineComponent<ChartBarStackedAxisProps>;

export default ChartBarStackedAxis;
export { ChartBarStackedAxis };
