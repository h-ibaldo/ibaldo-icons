import type { DefineComponent } from 'vue';

export interface ChartLinePeakSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLinePeakSquare: DefineComponent<ChartLinePeakSquareProps>;

export default ChartLinePeakSquare;
export { ChartLinePeakSquare };
