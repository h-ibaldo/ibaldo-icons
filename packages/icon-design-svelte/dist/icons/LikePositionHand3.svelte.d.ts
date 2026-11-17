import { SvelteComponent } from 'svelte';

export interface LikePositionHand3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LikePositionHand3 extends SvelteComponent<LikePositionHand3Props> {}
