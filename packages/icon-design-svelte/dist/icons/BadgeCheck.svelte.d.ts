import { SvelteComponent } from 'svelte';

export interface BadgeCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheck extends SvelteComponent<BadgeCheckProps> {}
