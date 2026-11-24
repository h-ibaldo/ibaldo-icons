import type { DefineComponent } from 'vue';

export interface MonitorOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorOff: DefineComponent<MonitorOffProps>;

export default MonitorOff;
export { MonitorOff };
