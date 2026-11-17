import { SvelteComponent } from 'svelte';

export interface HandTwoFingersSwipeRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingersSwipeRight extends SvelteComponent<HandTwoFingersSwipeRightProps> {}
