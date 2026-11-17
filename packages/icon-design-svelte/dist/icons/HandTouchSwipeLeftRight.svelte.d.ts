import { SvelteComponent } from 'svelte';

export interface HandTouchSwipeLeftRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchSwipeLeftRight extends SvelteComponent<HandTouchSwipeLeftRightProps> {}
