import type { DefineComponent } from 'vue';

export interface MonitorPlayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorPlay: DefineComponent<MonitorPlayProps>;

export default MonitorPlay;
export { MonitorPlay };
