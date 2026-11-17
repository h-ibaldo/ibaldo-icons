import { SvelteComponent } from 'svelte';

export interface BadgeCheck3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheck3 extends SvelteComponent<BadgeCheck3Props> {}
