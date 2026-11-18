import { SvelteComponent } from 'svelte';

export interface TagDotsCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagDotsCircleRound extends SvelteComponent<TagDotsCircleRoundProps> {}
