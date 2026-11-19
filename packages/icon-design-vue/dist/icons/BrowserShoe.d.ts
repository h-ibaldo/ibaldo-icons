import type { DefineComponent } from 'vue';

export interface BrowserShoeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserShoe: DefineComponent<BrowserShoeProps>;

export default BrowserShoe;
export { BrowserShoe };
