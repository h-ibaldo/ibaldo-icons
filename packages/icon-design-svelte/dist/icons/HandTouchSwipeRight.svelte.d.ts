import { SvelteComponent } from 'svelte';

export interface HandTouchSwipeRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchSwipeRight extends SvelteComponent<HandTouchSwipeRightProps> {}
