import { SvelteComponent } from 'svelte';

export interface TagPercentStringRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagPercentStringRound extends SvelteComponent<TagPercentStringRoundProps> {}
