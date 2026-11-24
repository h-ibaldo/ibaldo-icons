import type { DefineComponent } from 'vue';

export interface TouchSwipeUpGapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSwipeUpGap: DefineComponent<TouchSwipeUpGapProps>;

export default TouchSwipeUpGap;
export { TouchSwipeUpGap };
