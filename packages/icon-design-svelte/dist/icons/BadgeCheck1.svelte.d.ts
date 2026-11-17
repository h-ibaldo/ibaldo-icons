import { SvelteComponent } from 'svelte';

export interface BadgeCheck1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheck1 extends SvelteComponent<BadgeCheck1Props> {}
