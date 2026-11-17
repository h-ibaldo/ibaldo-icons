import { SvelteComponent } from 'svelte';

export interface CastRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CastRound extends SvelteComponent<CastRoundProps> {}
