import type { DefineComponent } from 'vue';

export interface WifiMediumProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WifiMedium: DefineComponent<WifiMediumProps>;

export default WifiMedium;
export { WifiMedium };
