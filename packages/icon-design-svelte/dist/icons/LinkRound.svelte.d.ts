import { SvelteComponent } from 'svelte';

export interface LinkRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkRound extends SvelteComponent<LinkRoundProps> {}
