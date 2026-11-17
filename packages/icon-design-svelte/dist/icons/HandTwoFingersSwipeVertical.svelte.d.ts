import { SvelteComponent } from 'svelte';

export interface HandTwoFingersSwipeVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingersSwipeVertical extends SvelteComponent<HandTwoFingersSwipeVerticalProps> {}
