import { SvelteComponent } from 'svelte';

export interface LinkMinusRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusRound extends SvelteComponent<LinkMinusRoundProps> {}
