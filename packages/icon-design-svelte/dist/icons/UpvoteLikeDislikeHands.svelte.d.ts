import { SvelteComponent } from 'svelte';

export interface UpvoteLikeDislikeHandsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UpvoteLikeDislikeHands extends SvelteComponent<UpvoteLikeDislikeHandsProps> {}
