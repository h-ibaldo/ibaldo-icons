import { SvelteComponent } from 'svelte';

export interface LikePositionHand4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LikePositionHand4 extends SvelteComponent<LikePositionHand4Props> {}
