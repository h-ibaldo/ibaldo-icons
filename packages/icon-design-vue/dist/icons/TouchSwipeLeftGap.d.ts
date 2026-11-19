import type { DefineComponent } from 'vue';

export interface TouchSwipeLeftGapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSwipeLeftGap: DefineComponent<TouchSwipeLeftGapProps>;

export default TouchSwipeLeftGap;
export { TouchSwipeLeftGap };
