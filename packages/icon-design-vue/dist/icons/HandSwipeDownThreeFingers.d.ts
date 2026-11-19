import type { DefineComponent } from 'vue';

export interface HandSwipeDownThreeFingersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSwipeDownThreeFingers: DefineComponent<HandSwipeDownThreeFingersProps>;

export default HandSwipeDownThreeFingers;
export { HandSwipeDownThreeFingers };
