import type { DefineComponent } from 'vue';

export interface BrowserShieldProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserShield: DefineComponent<BrowserShieldProps>;

export default BrowserShield;
export { BrowserShield };
