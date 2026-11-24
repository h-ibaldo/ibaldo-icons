import type { DefineComponent } from 'vue';

export interface ScrollTextNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScrollTextNarrow: DefineComponent<ScrollTextNarrowProps>;

export default ScrollTextNarrow;
export { ScrollTextNarrow };
