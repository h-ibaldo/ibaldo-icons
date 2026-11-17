import { SvelteComponent } from 'svelte';

export interface HandSwipeUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeUp extends SvelteComponent<HandSwipeUpProps> {}
