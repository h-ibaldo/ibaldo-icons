import { SvelteComponent } from 'svelte';

export interface TagStringRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagStringRound extends SvelteComponent<TagStringRoundProps> {}
