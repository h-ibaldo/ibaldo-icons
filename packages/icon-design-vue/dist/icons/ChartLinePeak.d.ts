import type { DefineComponent } from 'vue';

export interface ChartLinePeakProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLinePeak: DefineComponent<ChartLinePeakProps>;

export default ChartLinePeak;
export { ChartLinePeak };
