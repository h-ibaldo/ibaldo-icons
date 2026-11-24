import type { DefineComponent } from 'vue';

export interface BrowserBanknoteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserBanknote: DefineComponent<BrowserBanknoteProps>;

export default BrowserBanknote;
export { BrowserBanknote };
