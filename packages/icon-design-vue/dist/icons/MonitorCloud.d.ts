import type { DefineComponent } from 'vue';

export interface MonitorCloudProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorCloud: DefineComponent<MonitorCloudProps>;

export default MonitorCloud;
export { MonitorCloud };
