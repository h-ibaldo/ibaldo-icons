import type { DefineComponent } from 'vue';

export interface HandSwipeUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSwipeUp: DefineComponent<HandSwipeUpProps>;

export default HandSwipeUp;
export { HandSwipeUp };
