import type { DefineComponent } from 'vue';

export interface WifiLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WifiLock: DefineComponent<WifiLockProps>;

export default WifiLock;
export { WifiLock };
