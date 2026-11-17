import { SvelteComponent } from 'svelte';

export interface BadgeCheckJaggedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheckJagged extends SvelteComponent<BadgeCheckJaggedProps> {}
