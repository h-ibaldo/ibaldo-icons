import { SvelteComponent } from 'svelte';

export interface DislikeHand3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DislikeHand3 extends SvelteComponent<DislikeHand3Props> {}
