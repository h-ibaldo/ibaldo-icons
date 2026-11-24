import { SvelteComponent } from 'svelte';

export interface HandSwipeUpThreeFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeUpThreeFingers extends SvelteComponent<HandSwipeUpThreeFingersProps> {}
