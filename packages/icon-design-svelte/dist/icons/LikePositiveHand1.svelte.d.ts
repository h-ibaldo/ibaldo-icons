import { SvelteComponent } from 'svelte';

export interface LikePositiveHand1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LikePositiveHand1 extends SvelteComponent<LikePositiveHand1Props> {}
