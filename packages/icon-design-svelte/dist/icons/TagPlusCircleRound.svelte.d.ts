import { SvelteComponent } from 'svelte';

export interface TagPlusCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagPlusCircleRound extends SvelteComponent<TagPlusCircleRoundProps> {}
