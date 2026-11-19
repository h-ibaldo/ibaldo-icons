import type { DefineComponent } from 'vue';

export interface TouchSwipeDownGapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSwipeDownGap: DefineComponent<TouchSwipeDownGapProps>;

export default TouchSwipeDownGap;
export { TouchSwipeDownGap };
