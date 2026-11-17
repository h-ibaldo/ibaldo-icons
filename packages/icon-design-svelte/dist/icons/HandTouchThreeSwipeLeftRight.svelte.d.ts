import { SvelteComponent } from 'svelte';

export interface HandTouchThreeSwipeLeftRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchThreeSwipeLeftRight extends SvelteComponent<HandTouchThreeSwipeLeftRightProps> {}
