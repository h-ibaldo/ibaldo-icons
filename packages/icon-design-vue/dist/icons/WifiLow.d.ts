import type { DefineComponent } from 'vue';

export interface WifiLowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WifiLow: DefineComponent<WifiLowProps>;

export default WifiLow;
export { WifiLow };
