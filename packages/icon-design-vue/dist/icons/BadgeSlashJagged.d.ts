import type { DefineComponent } from 'vue';

export interface BadgeSlashJaggedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeSlashJagged: DefineComponent<BadgeSlashJaggedProps>;

export default BadgeSlashJagged;
export { BadgeSlashJagged };
