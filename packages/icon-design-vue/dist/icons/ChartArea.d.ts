import type { DefineComponent } from 'vue';

export interface ChartAreaProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartArea: DefineComponent<ChartAreaProps>;

export default ChartArea;
export { ChartArea };
