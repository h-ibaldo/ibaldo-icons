import { SvelteComponent } from 'svelte';

export interface LikePositiveHand3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LikePositiveHand3 extends SvelteComponent<LikePositiveHand3Props> {}
