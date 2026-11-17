import { SvelteComponent } from 'svelte';

export interface HandTwoFingerPinchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingerPinch extends SvelteComponent<HandTwoFingerPinchProps> {}
