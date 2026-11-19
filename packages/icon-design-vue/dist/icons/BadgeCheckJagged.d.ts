import type { DefineComponent } from 'vue';

export interface BadgeCheckJaggedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeCheckJagged: DefineComponent<BadgeCheckJaggedProps>;

export default BadgeCheckJagged;
export { BadgeCheckJagged };
