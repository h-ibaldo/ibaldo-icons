import { SvelteComponent } from 'svelte';

export interface LikePositiveHand4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LikePositiveHand4 extends SvelteComponent<LikePositiveHand4Props> {}
