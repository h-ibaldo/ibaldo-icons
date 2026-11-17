import { SvelteComponent } from 'svelte';

export interface BadgeCheck6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheck6 extends SvelteComponent<BadgeCheck6Props> {}
