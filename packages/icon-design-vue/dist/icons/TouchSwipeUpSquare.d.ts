import type { DefineComponent } from 'vue';

export interface TouchSwipeUpSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSwipeUpSquare: DefineComponent<TouchSwipeUpSquareProps>;

export default TouchSwipeUpSquare;
export { TouchSwipeUpSquare };
