import type { DefineComponent } from 'vue';

export interface ChartLineUpAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineUpAxis: DefineComponent<ChartLineUpAxisProps>;

export default ChartLineUpAxis;
export { ChartLineUpAxis };
