import { SvelteComponent } from 'svelte';

export interface TagClockRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagClockRound extends SvelteComponent<TagClockRoundProps> {}
