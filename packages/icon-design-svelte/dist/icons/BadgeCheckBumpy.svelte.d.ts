import { SvelteComponent } from 'svelte';

export interface BadgeCheckBumpyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheckBumpy extends SvelteComponent<BadgeCheckBumpyProps> {}
