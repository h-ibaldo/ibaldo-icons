import type { DefineComponent } from 'vue';

export interface HandSwipeUpDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSwipeUpDown: DefineComponent<HandSwipeUpDownProps>;

export default HandSwipeUpDown;
export { HandSwipeUpDown };
