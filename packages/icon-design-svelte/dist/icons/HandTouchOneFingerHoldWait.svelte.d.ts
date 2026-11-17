import { SvelteComponent } from 'svelte';

export interface HandTouchOneFingerHoldWaitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchOneFingerHoldWait extends SvelteComponent<HandTouchOneFingerHoldWaitProps> {}
