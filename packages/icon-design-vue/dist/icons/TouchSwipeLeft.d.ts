import type { DefineComponent } from 'vue';

export interface TouchSwipeLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TouchSwipeLeft: DefineComponent<TouchSwipeLeftProps>;

export default TouchSwipeLeft;
export { TouchSwipeLeft };
