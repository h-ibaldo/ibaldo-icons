import type { DefineComponent } from 'vue';

export interface ChartBarHorizontalPeakAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarHorizontalPeakAxis: DefineComponent<ChartBarHorizontalPeakAxisProps>;

export default ChartBarHorizontalPeakAxis;
export { ChartBarHorizontalPeakAxis };
