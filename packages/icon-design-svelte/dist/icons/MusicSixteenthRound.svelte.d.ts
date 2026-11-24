import { SvelteComponent } from 'svelte';

export interface MusicSixteenthRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MusicSixteenthRound extends SvelteComponent<MusicSixteenthRoundProps> {}
