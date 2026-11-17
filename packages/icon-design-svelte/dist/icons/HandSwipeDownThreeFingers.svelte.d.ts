import { SvelteComponent } from 'svelte';

export interface HandSwipeDownThreeFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeDownThreeFingers extends SvelteComponent<HandSwipeDownThreeFingersProps> {}
