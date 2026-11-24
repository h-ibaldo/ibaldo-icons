import type { DefineComponent } from 'vue';

export interface BrowserHandbagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserHandbag: DefineComponent<BrowserHandbagProps>;

export default BrowserHandbag;
export { BrowserHandbag };
