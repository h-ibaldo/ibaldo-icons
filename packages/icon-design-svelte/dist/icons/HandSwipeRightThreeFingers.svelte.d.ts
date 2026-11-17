import { SvelteComponent } from 'svelte';

export interface HandSwipeRightThreeFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeRightThreeFingers extends SvelteComponent<HandSwipeRightThreeFingersProps> {}
