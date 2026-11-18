import { SvelteComponent } from 'svelte';

export interface TagOffRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagOffRound extends SvelteComponent<TagOffRoundProps> {}
