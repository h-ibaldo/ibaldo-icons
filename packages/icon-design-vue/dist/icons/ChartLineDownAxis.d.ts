import type { DefineComponent } from 'vue';

export interface ChartLineDownAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartLineDownAxis: DefineComponent<ChartLineDownAxisProps>;

export default ChartLineDownAxis;
export { ChartLineDownAxis };
