import { SvelteComponent } from 'svelte';

export interface LinkXCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXCircleRound extends SvelteComponent<LinkXCircleRoundProps> {}
