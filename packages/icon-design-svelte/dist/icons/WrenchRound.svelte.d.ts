import { SvelteComponent } from 'svelte';

export interface WrenchRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WrenchRound extends SvelteComponent<WrenchRoundProps> {}
