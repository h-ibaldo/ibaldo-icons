import type { DefineComponent } from 'vue';

export interface MonitorCodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorCode: DefineComponent<MonitorCodeProps>;

export default MonitorCode;
export { MonitorCode };
