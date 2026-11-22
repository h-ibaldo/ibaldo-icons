import type { DefineComponent } from 'vue';

export interface ChartGanttSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartGanttSquare: DefineComponent<ChartGanttSquareProps>;

export default ChartGanttSquare;
export { ChartGanttSquare };
