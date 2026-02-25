import { SvelteComponent } from 'svelte';

export interface HandTouchTwoFingersPinchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTouchTwoFingersPinch extends SvelteComponent<HandTouchTwoFingersPinchProps> {}
