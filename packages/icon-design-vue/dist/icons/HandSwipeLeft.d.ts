import type { DefineComponent } from 'vue';

export interface HandSwipeLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSwipeLeft: DefineComponent<HandSwipeLeftProps>;

export default HandSwipeLeft;
export { HandSwipeLeft };
