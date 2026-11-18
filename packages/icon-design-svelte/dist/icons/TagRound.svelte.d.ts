import { SvelteComponent } from 'svelte';

export interface TagRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagRound extends SvelteComponent<TagRoundProps> {}
