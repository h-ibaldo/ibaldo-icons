import { SvelteComponent } from 'svelte';

export interface BadgeSlashJaggedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeSlashJagged extends SvelteComponent<BadgeSlashJaggedProps> {}
