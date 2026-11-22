import type { DefineComponent } from 'vue';

export interface ChartAxisGridProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartAxisGrid: DefineComponent<ChartAxisGridProps>;

export default ChartAxisGrid;
export { ChartAxisGrid };
