import { SvelteComponent } from 'svelte';

export interface HandSwipeLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeLeft extends SvelteComponent<HandSwipeLeftProps> {}
