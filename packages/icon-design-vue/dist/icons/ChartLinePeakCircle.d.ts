import type { DefineComponent } from 'vue';

export interface ChartLinePeakCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakCircle: DefineComponent<ChartLinePeakCircleProps>;

export default ChartLinePeakCircle;
export { ChartLinePeakCircle };
