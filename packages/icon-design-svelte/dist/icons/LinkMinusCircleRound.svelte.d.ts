import { SvelteComponent } from 'svelte';

export interface LinkMinusCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusCircleRound extends SvelteComponent<LinkMinusCircleRoundProps> {}
