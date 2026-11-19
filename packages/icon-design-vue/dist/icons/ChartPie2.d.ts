import type { DefineComponent } from 'vue';

export interface ChartPie2Props {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartPie2: DefineComponent<ChartPie2Props>;

export default ChartPie2;
export { ChartPie2 };
