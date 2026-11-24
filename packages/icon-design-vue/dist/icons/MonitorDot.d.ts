import type { DefineComponent } from 'vue';

export interface MonitorDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorDot: DefineComponent<MonitorDotProps>;

export default MonitorDot;
export { MonitorDot };
