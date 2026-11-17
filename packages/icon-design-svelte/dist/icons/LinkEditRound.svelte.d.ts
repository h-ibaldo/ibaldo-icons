import { SvelteComponent } from 'svelte';

export interface LinkEditRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditRound extends SvelteComponent<LinkEditRoundProps> {}
