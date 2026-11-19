import type { DefineComponent } from 'vue';

export interface BrowserHeartCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserHeartCenter: DefineComponent<BrowserHeartCenterProps>;

export default BrowserHeartCenter;
export { BrowserHeartCenter };
