import { SvelteComponent } from 'svelte';

export interface HandTouchSwipeLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchSwipeLeft extends SvelteComponent<HandTouchSwipeLeftProps> {}
