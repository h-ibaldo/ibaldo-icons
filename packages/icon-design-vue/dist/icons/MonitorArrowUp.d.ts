import type { DefineComponent } from 'vue';

export interface MonitorArrowUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorArrowUp: DefineComponent<MonitorArrowUpProps>;

export default MonitorArrowUp;
export { MonitorArrowUp };
