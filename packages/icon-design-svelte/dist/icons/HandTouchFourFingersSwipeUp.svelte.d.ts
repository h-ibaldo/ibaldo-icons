import { SvelteComponent } from 'svelte';

export interface HandTouchFourFingersSwipeUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchFourFingersSwipeUp extends SvelteComponent<HandTouchFourFingersSwipeUpProps> {}
