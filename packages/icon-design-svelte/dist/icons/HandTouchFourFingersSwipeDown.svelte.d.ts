import { SvelteComponent } from 'svelte';

export interface HandTouchFourFingersSwipeDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchFourFingersSwipeDown extends SvelteComponent<HandTouchFourFingersSwipeDownProps> {}
