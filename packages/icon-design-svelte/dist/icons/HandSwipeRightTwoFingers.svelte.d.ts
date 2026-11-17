import { SvelteComponent } from 'svelte';

export interface HandSwipeRightTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeRightTwoFingers extends SvelteComponent<HandSwipeRightTwoFingersProps> {}
