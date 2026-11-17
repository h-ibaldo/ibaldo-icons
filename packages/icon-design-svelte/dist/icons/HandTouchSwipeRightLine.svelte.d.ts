import { SvelteComponent } from 'svelte';

export interface HandTouchSwipeRightLineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchSwipeRightLine extends SvelteComponent<HandTouchSwipeRightLineProps> {}
