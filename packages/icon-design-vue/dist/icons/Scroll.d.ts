import type { DefineComponent } from 'vue';

export interface ScrollProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Scroll: DefineComponent<ScrollProps>;

export default Scroll;
export { Scroll };
