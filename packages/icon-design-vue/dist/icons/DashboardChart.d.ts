import type { DefineComponent } from 'vue';

export interface DashboardChartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DashboardChart: DefineComponent<DashboardChartProps>;

export default DashboardChart;
export { DashboardChart };
