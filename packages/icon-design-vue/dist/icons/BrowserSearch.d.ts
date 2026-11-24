import type { DefineComponent } from 'vue';

export interface BrowserSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserSearch: DefineComponent<BrowserSearchProps>;

export default BrowserSearch;
export { BrowserSearch };
