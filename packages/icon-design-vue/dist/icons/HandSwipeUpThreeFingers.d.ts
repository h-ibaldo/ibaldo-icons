import type { DefineComponent } from 'vue';

export interface HandSwipeUpThreeFingersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSwipeUpThreeFingers: DefineComponent<HandSwipeUpThreeFingersProps>;

export default HandSwipeUpThreeFingers;
export { HandSwipeUpThreeFingers };
