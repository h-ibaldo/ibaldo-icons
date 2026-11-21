import type { DefineComponent } from 'vue';

export interface MonitorStopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorStop: DefineComponent<MonitorStopProps>;

export default MonitorStop;
export { MonitorStop };
