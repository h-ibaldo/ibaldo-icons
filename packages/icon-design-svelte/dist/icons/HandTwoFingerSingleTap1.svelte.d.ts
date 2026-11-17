import { SvelteComponent } from 'svelte';

export interface HandTwoFingerSingleTap1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingerSingleTap1 extends SvelteComponent<HandTwoFingerSingleTap1Props> {}
