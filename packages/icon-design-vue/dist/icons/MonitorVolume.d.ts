import type { DefineComponent } from 'vue';

export interface MonitorVolumeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MonitorVolume: DefineComponent<MonitorVolumeProps>;

export default MonitorVolume;
export { MonitorVolume };
