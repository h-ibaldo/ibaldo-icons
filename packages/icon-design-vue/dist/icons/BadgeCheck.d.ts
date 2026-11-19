import type { DefineComponent } from 'vue';

export interface BadgeCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeCheck: DefineComponent<BadgeCheckProps>;

export default BadgeCheck;
export { BadgeCheck };
