import { SvelteComponent } from 'svelte';

export interface HandSwipeDownTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeDownTwoFingers extends SvelteComponent<HandSwipeDownTwoFingersProps> {}
