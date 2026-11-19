import type { DefineComponent } from 'vue';

export interface BrowserMegaphoneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserMegaphone: DefineComponent<BrowserMegaphoneProps>;

export default BrowserMegaphone;
export { BrowserMegaphone };
