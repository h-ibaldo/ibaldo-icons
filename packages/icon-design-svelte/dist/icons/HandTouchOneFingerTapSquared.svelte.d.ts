import { SvelteComponent } from 'svelte';

export interface HandTouchOneFingerTapSquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchOneFingerTapSquared extends SvelteComponent<HandTouchOneFingerTapSquaredProps> {}
