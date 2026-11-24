import type { DefineComponent } from 'vue';

export interface MonitorXCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorXCorner: DefineComponent<MonitorXCornerProps>;

export default MonitorXCorner;
export { MonitorXCorner };
