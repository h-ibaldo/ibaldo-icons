import type { DefineComponent } from 'vue';

export interface ChartDonutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartDonut: DefineComponent<ChartDonutProps>;

export default ChartDonut;
export { ChartDonut };
