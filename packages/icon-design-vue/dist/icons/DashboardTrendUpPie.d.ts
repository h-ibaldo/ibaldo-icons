import type { DefineComponent } from 'vue';

export interface DashboardTrendUpPieProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DashboardTrendUpPie: DefineComponent<DashboardTrendUpPieProps>;

export default DashboardTrendUpPie;
export { DashboardTrendUpPie };
