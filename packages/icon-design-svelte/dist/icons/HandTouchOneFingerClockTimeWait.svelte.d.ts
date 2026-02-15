import { SvelteComponent } from 'svelte';

export interface HandTouchOneFingerClockTimeWaitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchOneFingerClockTimeWait extends SvelteComponent<HandTouchOneFingerClockTimeWaitProps> {}
