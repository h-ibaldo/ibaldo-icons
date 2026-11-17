import { SvelteComponent } from 'svelte';

export interface HandTouchFourFingersSwipeRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchFourFingersSwipeRight extends SvelteComponent<HandTouchFourFingersSwipeRightProps> {}
