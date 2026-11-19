import type { DefineComponent } from 'vue';

export interface TouchSwipeDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSwipeDown: DefineComponent<TouchSwipeDownProps>;

export default TouchSwipeDown;
export { TouchSwipeDown };
