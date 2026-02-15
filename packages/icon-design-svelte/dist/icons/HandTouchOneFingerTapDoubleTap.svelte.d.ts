import { SvelteComponent } from 'svelte';

export interface HandTouchOneFingerTapDoubleTapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchOneFingerTapDoubleTap extends SvelteComponent<HandTouchOneFingerTapDoubleTapProps> {}
