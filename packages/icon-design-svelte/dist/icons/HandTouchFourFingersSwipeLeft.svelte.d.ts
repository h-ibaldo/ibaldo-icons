import { SvelteComponent } from 'svelte';

export interface HandTouchFourFingersSwipeLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchFourFingersSwipeLeft extends SvelteComponent<HandTouchFourFingersSwipeLeftProps> {}
