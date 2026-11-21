import type { DefineComponent } from 'vue';

export interface BadgePercentJaggedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgePercentJagged: DefineComponent<BadgePercentJaggedProps>;

export default BadgePercentJagged;
export { BadgePercentJagged };
