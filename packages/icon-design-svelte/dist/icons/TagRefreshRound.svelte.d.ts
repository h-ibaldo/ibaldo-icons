import { SvelteComponent } from 'svelte';

export interface TagRefreshRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagRefreshRound extends SvelteComponent<TagRefreshRoundProps> {}
