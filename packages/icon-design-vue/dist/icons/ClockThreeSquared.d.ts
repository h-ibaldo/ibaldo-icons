import type { DefineComponent } from 'vue';

export interface ClockThreeSquaredProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockThreeSquared: DefineComponent<ClockThreeSquaredProps>;

export default ClockThreeSquared;
export { ClockThreeSquared };
