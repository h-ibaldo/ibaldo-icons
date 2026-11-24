import type { DefineComponent } from 'vue';

export interface HandSwipeRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSwipeRight: DefineComponent<HandSwipeRightProps>;

export default HandSwipeRight;
export { HandSwipeRight };
