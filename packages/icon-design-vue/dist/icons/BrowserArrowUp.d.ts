import type { DefineComponent } from 'vue';

export interface BrowserArrowUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserArrowUp: DefineComponent<BrowserArrowUpProps>;

export default BrowserArrowUp;
export { BrowserArrowUp };
