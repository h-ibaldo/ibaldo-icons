import type { DefineComponent } from 'vue';

export interface DashboardPieBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DashboardPieBars: DefineComponent<DashboardPieBarsProps>;

export default DashboardPieBars;
export { DashboardPieBars };
