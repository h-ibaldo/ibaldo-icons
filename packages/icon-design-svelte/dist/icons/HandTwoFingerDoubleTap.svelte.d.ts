import { SvelteComponent } from 'svelte';

export interface HandTwoFingerDoubleTapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingerDoubleTap extends SvelteComponent<HandTwoFingerDoubleTapProps> {}
