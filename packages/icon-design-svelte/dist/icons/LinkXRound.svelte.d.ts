import { SvelteComponent } from 'svelte';

export interface LinkXRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXRound extends SvelteComponent<LinkXRoundProps> {}
