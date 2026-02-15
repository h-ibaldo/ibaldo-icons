import { SvelteComponent } from 'svelte';

export interface DislikeHand12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DislikeHand12 extends SvelteComponent<DislikeHand12Props> {}
