import type { DefineComponent } from 'vue';

export interface MonitorBagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorBag: DefineComponent<MonitorBagProps>;

export default MonitorBag;
export { MonitorBag };
