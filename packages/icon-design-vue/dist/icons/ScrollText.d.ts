import type { DefineComponent } from 'vue';

export interface ScrollTextProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScrollText: DefineComponent<ScrollTextProps>;

export default ScrollText;
export { ScrollText };
