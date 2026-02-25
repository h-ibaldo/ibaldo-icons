import { SvelteComponent } from 'svelte';

export interface HandTouchTwoFingersDoubleTapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchTwoFingersDoubleTap extends SvelteComponent<HandTouchTwoFingersDoubleTapProps> {}
