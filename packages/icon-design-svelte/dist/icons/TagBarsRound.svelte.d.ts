import { SvelteComponent } from 'svelte';

export interface TagBarsRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagBarsRound extends SvelteComponent<TagBarsRoundProps> {}
