import { SvelteComponent } from 'svelte';

export interface HandTwoFingerSpread2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingerSpread2 extends SvelteComponent<HandTwoFingerSpread2Props> {}
