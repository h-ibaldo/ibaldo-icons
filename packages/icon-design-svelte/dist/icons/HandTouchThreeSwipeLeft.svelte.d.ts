import { SvelteComponent } from 'svelte';

export interface HandTouchThreeSwipeLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchThreeSwipeLeft extends SvelteComponent<HandTouchThreeSwipeLeftProps> {}
