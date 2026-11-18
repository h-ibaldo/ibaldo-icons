import { SvelteComponent } from 'svelte';

export interface LinkRaysRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkRaysRound extends SvelteComponent<LinkRaysRoundProps> {}
