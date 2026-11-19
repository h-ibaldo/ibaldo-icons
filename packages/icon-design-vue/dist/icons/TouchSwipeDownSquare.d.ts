import type { DefineComponent } from 'vue';

export interface TouchSwipeDownSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSwipeDownSquare: DefineComponent<TouchSwipeDownSquareProps>;

export default TouchSwipeDownSquare;
export { TouchSwipeDownSquare };
