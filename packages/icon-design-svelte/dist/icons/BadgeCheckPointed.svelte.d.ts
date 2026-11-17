import { SvelteComponent } from 'svelte';

export interface BadgeCheckPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheckPointed extends SvelteComponent<BadgeCheckPointedProps> {}
