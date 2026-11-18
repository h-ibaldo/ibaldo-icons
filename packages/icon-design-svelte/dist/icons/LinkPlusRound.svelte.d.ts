import { SvelteComponent } from 'svelte';

export interface LinkPlusRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusRound extends SvelteComponent<LinkPlusRoundProps> {}
