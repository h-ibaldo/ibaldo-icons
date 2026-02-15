import { SvelteComponent } from 'svelte';

export interface DislikeHand1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DislikeHand1 extends SvelteComponent<DislikeHand1Props> {}
