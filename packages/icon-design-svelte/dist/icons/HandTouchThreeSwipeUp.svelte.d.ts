import { SvelteComponent } from 'svelte';

export interface HandTouchThreeSwipeUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchThreeSwipeUp extends SvelteComponent<HandTouchThreeSwipeUpProps> {}
