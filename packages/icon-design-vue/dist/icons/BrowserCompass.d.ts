import type { DefineComponent } from 'vue';

export interface BrowserCompassProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserCompass: DefineComponent<BrowserCompassProps>;

export default BrowserCompass;
export { BrowserCompass };
