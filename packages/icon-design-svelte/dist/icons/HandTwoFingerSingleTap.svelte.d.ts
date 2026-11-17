import { SvelteComponent } from 'svelte';

export interface HandTwoFingerSingleTapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingerSingleTap extends SvelteComponent<HandTwoFingerSingleTapProps> {}
