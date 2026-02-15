import { SvelteComponent } from 'svelte';

export interface DislikeHand32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DislikeHand32 extends SvelteComponent<DislikeHand32Props> {}
