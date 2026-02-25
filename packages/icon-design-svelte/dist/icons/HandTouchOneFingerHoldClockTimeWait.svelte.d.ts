import { SvelteComponent } from 'svelte';

export interface HandTouchOneFingerHoldClockTimeWaitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchOneFingerHoldClockTimeWait extends SvelteComponent<HandTouchOneFingerHoldClockTimeWaitProps> {}
