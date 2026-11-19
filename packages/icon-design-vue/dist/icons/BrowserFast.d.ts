import type { DefineComponent } from 'vue';

export interface BrowserFastProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserFast: DefineComponent<BrowserFastProps>;

export default BrowserFast;
export { BrowserFast };
