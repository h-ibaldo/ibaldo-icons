import type { DefineComponent } from 'vue';

export interface PresentationChartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PresentationChart: DefineComponent<PresentationChartProps>;

export default PresentationChart;
export { PresentationChart };
