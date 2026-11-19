import type { DefineComponent } from 'vue';

export interface ChartPieProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChartPie: DefineComponent<ChartPieProps>;

export default ChartPie;
export { ChartPie };
