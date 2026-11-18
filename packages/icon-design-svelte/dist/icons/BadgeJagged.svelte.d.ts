import { SvelteComponent } from 'svelte';

export interface BadgeJaggedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeJagged extends SvelteComponent<BadgeJaggedProps> {}
