import type { DefineComponent } from 'vue';

export interface BrowserSlidersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserSliders: DefineComponent<BrowserSlidersProps>;

export default BrowserSliders;
export { BrowserSliders };
