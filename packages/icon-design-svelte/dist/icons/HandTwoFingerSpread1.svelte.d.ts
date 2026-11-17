import { SvelteComponent } from 'svelte';

export interface HandTwoFingerSpread1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingerSpread1 extends SvelteComponent<HandTwoFingerSpread1Props> {}
