import type { DefineComponent } from 'vue';

export interface MonitorArrowDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorArrowDown: DefineComponent<MonitorArrowDownProps>;

export default MonitorArrowDown;
export { MonitorArrowDown };
