import type { DefineComponent } from 'vue';

export interface ChartLinePeakAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakAxis: DefineComponent<ChartLinePeakAxisProps>;

export default ChartLinePeakAxis;
export { ChartLinePeakAxis };
