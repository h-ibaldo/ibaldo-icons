import type { DefineComponent } from 'vue';

export interface BrowserScaleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserScale: DefineComponent<BrowserScaleProps>;

export default BrowserScale;
export { BrowserScale };
