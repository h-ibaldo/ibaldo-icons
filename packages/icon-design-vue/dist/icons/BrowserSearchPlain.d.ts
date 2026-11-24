import type { DefineComponent } from 'vue';

export interface BrowserSearchPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserSearchPlain: DefineComponent<BrowserSearchPlainProps>;

export default BrowserSearchPlain;
export { BrowserSearchPlain };
