import { SvelteComponent } from 'svelte';

export interface BadgeCheck7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeCheck7 extends SvelteComponent<BadgeCheck7Props> {}
