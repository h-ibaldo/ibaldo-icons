import type { DefineComponent } from 'vue';

export interface BadgePercentBumpyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgePercentBumpy: DefineComponent<BadgePercentBumpyProps>;

export default BadgePercentBumpy;
export { BadgePercentBumpy };
