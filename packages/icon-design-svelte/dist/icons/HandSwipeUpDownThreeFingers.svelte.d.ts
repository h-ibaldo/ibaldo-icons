import { SvelteComponent } from 'svelte';

export interface HandSwipeUpDownThreeFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeUpDownThreeFingers extends SvelteComponent<HandSwipeUpDownThreeFingersProps> {}
