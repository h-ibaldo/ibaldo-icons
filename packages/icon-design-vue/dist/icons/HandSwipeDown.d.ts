import type { DefineComponent } from 'vue';

export interface HandSwipeDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSwipeDown: DefineComponent<HandSwipeDownProps>;

export default HandSwipeDown;
export { HandSwipeDown };
