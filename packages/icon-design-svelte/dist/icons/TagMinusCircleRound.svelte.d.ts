import { SvelteComponent } from 'svelte';

export interface TagMinusCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagMinusCircleRound extends SvelteComponent<TagMinusCircleRoundProps> {}
