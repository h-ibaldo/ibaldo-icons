import type { DefineComponent } from 'vue';

export interface TouchSwipeUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSwipeUp: DefineComponent<TouchSwipeUpProps>;

export default TouchSwipeUp;
export { TouchSwipeUp };
