import type { DefineComponent } from 'vue';

export interface BrowserBanBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserBanBare: DefineComponent<BrowserBanBareProps>;

export default BrowserBanBare;
export { BrowserBanBare };
