import type { DefineComponent } from 'vue';

export interface BrowserDollarSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserDollarSearch: DefineComponent<BrowserDollarSearchProps>;

export default BrowserDollarSearch;
export { BrowserDollarSearch };
