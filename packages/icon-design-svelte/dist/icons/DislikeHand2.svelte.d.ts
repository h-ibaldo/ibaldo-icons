import { SvelteComponent } from 'svelte';

export interface DislikeHand2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DislikeHand2 extends SvelteComponent<DislikeHand2Props> {}
