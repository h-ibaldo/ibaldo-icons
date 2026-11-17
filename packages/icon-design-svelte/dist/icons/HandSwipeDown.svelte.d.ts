import { SvelteComponent } from 'svelte';

export interface HandSwipeDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeDown extends SvelteComponent<HandSwipeDownProps> {}
