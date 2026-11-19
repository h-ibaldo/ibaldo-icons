import type { DefineComponent } from 'vue';

export interface ClockStarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockStar: DefineComponent<ClockStarProps>;

export default ClockStar;
export { ClockStar };
