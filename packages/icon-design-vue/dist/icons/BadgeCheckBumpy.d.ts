import type { DefineComponent } from 'vue';

export interface BadgeCheckBumpyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeCheckBumpy: DefineComponent<BadgeCheckBumpyProps>;

export default BadgeCheckBumpy;
export { BadgeCheckBumpy };
