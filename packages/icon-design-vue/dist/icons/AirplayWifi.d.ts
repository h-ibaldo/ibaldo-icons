import type { DefineComponent } from 'vue';

export interface AirplayWifiProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AirplayWifi: DefineComponent<AirplayWifiProps>;

export default AirplayWifi;
export { AirplayWifi };
