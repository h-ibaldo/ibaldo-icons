import { SvelteComponent } from 'svelte';

export interface HandSwipeLeftTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeLeftTwoFingers extends SvelteComponent<HandSwipeLeftTwoFingersProps> {}
