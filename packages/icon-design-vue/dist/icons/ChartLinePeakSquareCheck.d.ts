import type { DefineComponent } from 'vue';

export interface ChartLinePeakSquareCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakSquareCheck: DefineComponent<ChartLinePeakSquareCheckProps>;

export default ChartLinePeakSquareCheck;
export { ChartLinePeakSquareCheck };
