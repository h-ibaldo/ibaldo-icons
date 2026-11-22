import type { DefineComponent } from 'vue';

export interface ChartGanttProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartGantt: DefineComponent<ChartGanttProps>;

export default ChartGantt;
export { ChartGantt };
