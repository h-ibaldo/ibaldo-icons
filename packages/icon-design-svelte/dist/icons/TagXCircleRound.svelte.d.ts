import { SvelteComponent } from 'svelte';

export interface TagXCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagXCircleRound extends SvelteComponent<TagXCircleRoundProps> {}
