import { SvelteComponent } from 'svelte';

export interface BadgeCheck5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheck5 extends SvelteComponent<BadgeCheck5Props> {}
