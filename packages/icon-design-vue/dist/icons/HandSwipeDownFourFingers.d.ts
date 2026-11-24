import type { DefineComponent } from 'vue';

export interface HandSwipeDownFourFingersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSwipeDownFourFingers: DefineComponent<HandSwipeDownFourFingersProps>;

export default HandSwipeDownFourFingers;
export { HandSwipeDownFourFingers };
