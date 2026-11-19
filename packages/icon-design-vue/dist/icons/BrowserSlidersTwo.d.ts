import type { DefineComponent } from 'vue';

export interface BrowserSlidersTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserSlidersTwo: DefineComponent<BrowserSlidersTwoProps>;

export default BrowserSlidersTwo;
export { BrowserSlidersTwo };
