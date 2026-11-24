import { SvelteComponent } from 'svelte';

export interface BadgePercentJaggedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgePercentJagged extends SvelteComponent<BadgePercentJaggedProps> {}
