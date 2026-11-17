import { SvelteComponent } from 'svelte';

export interface HandTwoFingerDoubleTap2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingerDoubleTap2 extends SvelteComponent<HandTwoFingerDoubleTap2Props> {}
