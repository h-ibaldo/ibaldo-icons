import type { DefineComponent } from 'vue';

export interface ChartDotsAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartDotsAxis: DefineComponent<ChartDotsAxisProps>;

export default ChartDotsAxis;
export { ChartDotsAxis };
