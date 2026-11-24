import type { DefineComponent } from 'vue';

export interface DashboardPieTrendUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DashboardPieTrendUp: DefineComponent<DashboardPieTrendUpProps>;

export default DashboardPieTrendUp;
export { DashboardPieTrendUp };
