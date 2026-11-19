import type { DefineComponent } from 'vue';

export interface BrowserSunBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserSunBare: DefineComponent<BrowserSunBareProps>;

export default BrowserSunBare;
export { BrowserSunBare };
