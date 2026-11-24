import { SvelteComponent } from 'svelte';

export interface BadgePercentBumpyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgePercentBumpy extends SvelteComponent<BadgePercentBumpyProps> {}
