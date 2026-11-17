import { SvelteComponent } from 'svelte';

export interface HandTouchOneFingerWaitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchOneFingerWait extends SvelteComponent<HandTouchOneFingerWaitProps> {}
