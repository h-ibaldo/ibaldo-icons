import type { DefineComponent } from 'vue';

export interface MonitorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Monitor: DefineComponent<MonitorProps>;

export default Monitor;
export { Monitor };
