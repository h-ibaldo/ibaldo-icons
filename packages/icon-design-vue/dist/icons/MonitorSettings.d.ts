import type { DefineComponent } from 'vue';

export interface MonitorSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorSettings: DefineComponent<MonitorSettingsProps>;

export default MonitorSettings;
export { MonitorSettings };
