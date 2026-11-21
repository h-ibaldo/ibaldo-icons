import type { DefineComponent } from 'vue';

export interface MonitorXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorX: DefineComponent<MonitorXProps>;

export default MonitorX;
export { MonitorX };
