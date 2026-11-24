import type { DefineComponent } from 'vue';

export interface ChartLinePeakCircleCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakCircleCheck: DefineComponent<ChartLinePeakCircleCheckProps>;

export default ChartLinePeakCircleCheck;
export { ChartLinePeakCircleCheck };
