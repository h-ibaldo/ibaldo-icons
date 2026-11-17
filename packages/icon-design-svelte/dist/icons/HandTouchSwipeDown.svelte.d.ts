import { SvelteComponent } from 'svelte';

export interface HandTouchSwipeDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchSwipeDown extends SvelteComponent<HandTouchSwipeDownProps> {}
