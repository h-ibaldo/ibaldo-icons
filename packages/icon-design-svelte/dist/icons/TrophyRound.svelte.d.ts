import { SvelteComponent } from 'svelte';

export interface TrophyRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrophyRound extends SvelteComponent<TrophyRoundProps> {}
