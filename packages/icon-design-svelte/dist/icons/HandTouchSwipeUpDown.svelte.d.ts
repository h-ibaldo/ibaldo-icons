import { SvelteComponent } from 'svelte';

export interface HandTouchSwipeUpDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchSwipeUpDown extends SvelteComponent<HandTouchSwipeUpDownProps> {}
