import type { DefineComponent } from 'vue';

export interface MonitorMobileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorMobile: DefineComponent<MonitorMobileProps>;

export default MonitorMobile;
export { MonitorMobile };
