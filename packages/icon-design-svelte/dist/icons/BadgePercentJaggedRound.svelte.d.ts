import { SvelteComponent } from 'svelte';

export interface BadgePercentJaggedRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgePercentJaggedRound extends SvelteComponent<BadgePercentJaggedRoundProps> {}
