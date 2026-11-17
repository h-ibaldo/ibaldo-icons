import { SvelteComponent } from 'svelte';

export interface HandTwoFingersSwipeUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingersSwipeUp extends SvelteComponent<HandTwoFingersSwipeUpProps> {}
