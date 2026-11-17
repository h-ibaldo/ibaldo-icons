import { SvelteComponent } from 'svelte';

export interface HandTwoFingerSwipeBidirectionalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTwoFingerSwipeBidirectional extends SvelteComponent<HandTwoFingerSwipeBidirectionalProps> {}
