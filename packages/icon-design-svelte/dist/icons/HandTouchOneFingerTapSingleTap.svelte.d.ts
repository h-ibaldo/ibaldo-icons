import { SvelteComponent } from 'svelte';

export interface HandTouchOneFingerTapSingleTapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchOneFingerTapSingleTap extends SvelteComponent<HandTouchOneFingerTapSingleTapProps> {}
