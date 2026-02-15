import { SvelteComponent } from 'svelte';

export interface DislikeHand4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DislikeHand4 extends SvelteComponent<DislikeHand4Props> {}
