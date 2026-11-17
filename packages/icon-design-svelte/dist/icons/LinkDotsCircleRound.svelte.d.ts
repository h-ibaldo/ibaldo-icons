import { SvelteComponent } from 'svelte';

export interface LinkDotsCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsCircleRound extends SvelteComponent<LinkDotsCircleRoundProps> {}
