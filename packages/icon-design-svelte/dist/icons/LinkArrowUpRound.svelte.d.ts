import { SvelteComponent } from 'svelte';

export interface LinkArrowUpRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkArrowUpRound extends SvelteComponent<LinkArrowUpRoundProps> {}
