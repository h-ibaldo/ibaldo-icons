import { SvelteComponent } from 'svelte';

export interface BadgeStarJaggedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeStarJagged extends SvelteComponent<BadgeStarJaggedProps> {}
