import type { DefineComponent } from 'vue';

export interface HandSwipeLeftRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSwipeLeftRight: DefineComponent<HandSwipeLeftRightProps>;

export default HandSwipeLeftRight;
export { HandSwipeLeftRight };
