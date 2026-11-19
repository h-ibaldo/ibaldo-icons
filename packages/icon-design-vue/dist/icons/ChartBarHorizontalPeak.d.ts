import type { DefineComponent } from 'vue';

export interface ChartBarHorizontalPeakProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarHorizontalPeak: DefineComponent<ChartBarHorizontalPeakProps>;

export default ChartBarHorizontalPeak;
export { ChartBarHorizontalPeak };
