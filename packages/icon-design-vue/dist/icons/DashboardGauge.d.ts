import type { DefineComponent } from 'vue';

export interface DashboardGaugeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DashboardGauge: DefineComponent<DashboardGaugeProps>;

export default DashboardGauge;
export { DashboardGauge };
