import type { DefineComponent } from 'vue';

export interface TouchSwipeRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSwipeRight: DefineComponent<TouchSwipeRightProps>;

export default TouchSwipeRight;
export { TouchSwipeRight };
