import { SvelteComponent } from 'svelte';

export interface LikePositiveHand2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LikePositiveHand2 extends SvelteComponent<LikePositiveHand2Props> {}
