import type { DefineComponent } from 'vue';

export interface WindowChartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowChart: DefineComponent<WindowChartProps>;

export default WindowChart;
export { WindowChart };
