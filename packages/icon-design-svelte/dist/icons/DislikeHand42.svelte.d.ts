import { SvelteComponent } from 'svelte';

export interface DislikeHand42Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DislikeHand42 extends SvelteComponent<DislikeHand42Props> {}
