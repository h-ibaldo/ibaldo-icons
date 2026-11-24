import { SvelteComponent } from 'svelte';

export interface HandSwipeLeftRightTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeLeftRightTwoFingers extends SvelteComponent<HandSwipeLeftRightTwoFingersProps> {}
