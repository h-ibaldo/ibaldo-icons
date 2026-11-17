import { SvelteComponent } from 'svelte';

export interface HandSwipeUpDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeUpDown extends SvelteComponent<HandSwipeUpDownProps> {}
