import { SvelteComponent } from 'svelte';

export interface TagBarsStringRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagBarsStringRound extends SvelteComponent<TagBarsStringRoundProps> {}
