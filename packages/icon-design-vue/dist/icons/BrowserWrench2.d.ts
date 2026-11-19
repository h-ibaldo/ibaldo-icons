import type { DefineComponent } from 'vue';

export interface BrowserWrench2Props {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserWrench2: DefineComponent<BrowserWrench2Props>;

export default BrowserWrench2;
export { BrowserWrench2 };
