import type { DefineComponent } from 'vue';

export interface MonitorPauseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorPause: DefineComponent<MonitorPauseProps>;

export default MonitorPause;
export { MonitorPause };
