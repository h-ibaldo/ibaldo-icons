import type { DefineComponent } from 'vue';

export interface WifiZeroProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WifiZero: DefineComponent<WifiZeroProps>;

export default WifiZero;
export { WifiZero };
