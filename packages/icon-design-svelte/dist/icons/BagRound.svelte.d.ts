import { SvelteComponent } from 'svelte';

export interface BagRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BagRound extends SvelteComponent<BagRoundProps> {}
