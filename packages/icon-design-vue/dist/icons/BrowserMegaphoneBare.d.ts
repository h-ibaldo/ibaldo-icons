import type { DefineComponent } from 'vue';

export interface BrowserMegaphoneBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserMegaphoneBare: DefineComponent<BrowserMegaphoneBareProps>;

export default BrowserMegaphoneBare;
export { BrowserMegaphoneBare };
