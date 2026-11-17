import { SvelteComponent } from 'svelte';

export interface HandSwipeLeftRightThreeFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeLeftRightThreeFingers extends SvelteComponent<HandSwipeLeftRightThreeFingersProps> {}
