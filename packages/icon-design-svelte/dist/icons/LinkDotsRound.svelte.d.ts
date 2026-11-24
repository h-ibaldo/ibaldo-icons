import { SvelteComponent } from 'svelte';

export interface LinkDotsRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsRound extends SvelteComponent<LinkDotsRoundProps> {}
