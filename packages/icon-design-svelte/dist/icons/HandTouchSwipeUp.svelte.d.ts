import { SvelteComponent } from 'svelte';

export interface HandTouchSwipeUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchSwipeUp extends SvelteComponent<HandTouchSwipeUpProps> {}
