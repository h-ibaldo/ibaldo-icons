import type { DefineComponent } from 'vue';

export interface MonitorPulseStandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorPulseStand: DefineComponent<MonitorPulseStandProps>;

export default MonitorPulseStand;
export { MonitorPulseStand };
