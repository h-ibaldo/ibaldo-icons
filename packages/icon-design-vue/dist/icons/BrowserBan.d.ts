import type { DefineComponent } from 'vue';

export interface BrowserBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserBan: DefineComponent<BrowserBanProps>;

export default BrowserBan;
export { BrowserBan };
