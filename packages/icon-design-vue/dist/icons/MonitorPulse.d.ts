import type { DefineComponent } from 'vue';

export interface MonitorPulseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorPulse: DefineComponent<MonitorPulseProps>;

export default MonitorPulse;
export { MonitorPulse };
