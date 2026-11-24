import type { DefineComponent } from 'vue';

export interface ScrollNarrowProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScrollNarrow: DefineComponent<ScrollNarrowProps>;

export default ScrollNarrow;
export { ScrollNarrow };
