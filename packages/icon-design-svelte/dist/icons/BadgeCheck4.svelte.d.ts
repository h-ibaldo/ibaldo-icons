import { SvelteComponent } from 'svelte';

export interface BadgeCheck4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheck4 extends SvelteComponent<BadgeCheck4Props> {}
