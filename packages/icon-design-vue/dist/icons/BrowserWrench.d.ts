import type { DefineComponent } from 'vue';

export interface BrowserWrenchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserWrench: DefineComponent<BrowserWrenchProps>;

export default BrowserWrench;
export { BrowserWrench };
