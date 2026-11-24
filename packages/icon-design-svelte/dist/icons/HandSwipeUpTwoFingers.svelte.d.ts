import { SvelteComponent } from 'svelte';

export interface HandSwipeUpTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeUpTwoFingers extends SvelteComponent<HandSwipeUpTwoFingersProps> {}
