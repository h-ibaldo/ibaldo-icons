import { SvelteComponent } from 'svelte';

export interface TagPercentRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagPercentRound extends SvelteComponent<TagPercentRoundProps> {}
