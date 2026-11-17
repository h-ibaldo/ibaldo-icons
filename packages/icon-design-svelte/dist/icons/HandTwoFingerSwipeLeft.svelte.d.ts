import { SvelteComponent } from 'svelte';

export interface HandTwoFingerSwipeLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingerSwipeLeft extends SvelteComponent<HandTwoFingerSwipeLeftProps> {}
