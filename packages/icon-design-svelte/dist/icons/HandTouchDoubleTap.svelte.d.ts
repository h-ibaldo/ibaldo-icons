import { SvelteComponent } from 'svelte';

export interface HandTouchDoubleTapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchDoubleTap extends SvelteComponent<HandTouchDoubleTapProps> {}
