import type { DefineComponent } from 'vue';

export interface ChartGanttBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartGanttBare: DefineComponent<ChartGanttBareProps>;

export default ChartGanttBare;
export { ChartGanttBare };
