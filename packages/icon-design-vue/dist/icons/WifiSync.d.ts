import type { DefineComponent } from 'vue';

export interface WifiSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WifiSync: DefineComponent<WifiSyncProps>;

export default WifiSync;
export { WifiSync };
