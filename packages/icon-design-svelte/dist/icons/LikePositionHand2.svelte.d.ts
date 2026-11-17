import { SvelteComponent } from 'svelte';

export interface LikePositionHand2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LikePositionHand2 extends SvelteComponent<LikePositionHand2Props> {}
