import { SvelteComponent } from 'svelte';

export interface TagSyncRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagSyncRound extends SvelteComponent<TagSyncRoundProps> {}
