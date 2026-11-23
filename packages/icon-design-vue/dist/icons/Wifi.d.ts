import type { DefineComponent } from 'vue';

export interface WifiProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Wifi: DefineComponent<WifiProps>;

export default Wifi;
export { Wifi };
