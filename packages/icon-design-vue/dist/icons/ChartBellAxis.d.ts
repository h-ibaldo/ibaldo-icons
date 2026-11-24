import type { DefineComponent } from 'vue';

export interface ChartBellAxisProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartBellAxis: DefineComponent<ChartBellAxisProps>;

export default ChartBellAxis;
export { ChartBellAxis };
