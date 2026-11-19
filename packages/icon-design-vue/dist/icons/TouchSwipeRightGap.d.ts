import type { DefineComponent } from 'vue';

export interface TouchSwipeRightGapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSwipeRightGap: DefineComponent<TouchSwipeRightGapProps>;

export default TouchSwipeRightGap;
export { TouchSwipeRightGap };
