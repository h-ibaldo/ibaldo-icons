import type { DefineComponent } from 'vue';

export interface ChartBarPeakProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBarPeak: DefineComponent<ChartBarPeakProps>;

export default ChartBarPeak;
export { ChartBarPeak };
