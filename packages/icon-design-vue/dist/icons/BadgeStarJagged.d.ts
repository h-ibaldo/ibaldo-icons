import type { DefineComponent } from 'vue';

export interface BadgeStarJaggedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeStarJagged: DefineComponent<BadgeStarJaggedProps>;

export default BadgeStarJagged;
export { BadgeStarJagged };
