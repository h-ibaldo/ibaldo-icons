import type { DefineComponent } from 'vue';

export interface ChalkboardChartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChalkboardChart: DefineComponent<ChalkboardChartProps>;

export default ChalkboardChart;
export { ChalkboardChart };
