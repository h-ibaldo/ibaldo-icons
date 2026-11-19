import type { DefineComponent } from 'vue';

export interface BadgeJaggedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeJagged: DefineComponent<BadgeJaggedProps>;

export default BadgeJagged;
export { BadgeJagged };
