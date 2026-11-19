import type { DefineComponent } from 'vue';

export interface DashboardPieListBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DashboardPieListBars: DefineComponent<DashboardPieListBarsProps>;

export default DashboardPieListBars;
export { DashboardPieListBars };
