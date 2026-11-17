import { SvelteComponent } from 'svelte';

export interface BadgeCheck2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheck2 extends SvelteComponent<BadgeCheck2Props> {}
