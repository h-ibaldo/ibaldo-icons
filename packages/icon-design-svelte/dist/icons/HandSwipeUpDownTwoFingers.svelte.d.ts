import { SvelteComponent } from 'svelte';

export interface HandSwipeUpDownTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeUpDownTwoFingers extends SvelteComponent<HandSwipeUpDownTwoFingersProps> {}
