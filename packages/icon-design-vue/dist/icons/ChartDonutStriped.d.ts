import type { DefineComponent } from 'vue';

export interface ChartDonutStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartDonutStriped: DefineComponent<ChartDonutStripedProps>;

export default ChartDonutStriped;
export { ChartDonutStriped };
