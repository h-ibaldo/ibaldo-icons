import { SvelteComponent } from 'svelte';

export interface HandTouchThreeSwipeRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchThreeSwipeRight extends SvelteComponent<HandTouchThreeSwipeRightProps> {}
