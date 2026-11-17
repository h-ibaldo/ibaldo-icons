import { SvelteComponent } from 'svelte';

export interface MusicRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MusicRound extends SvelteComponent<MusicRoundProps> {}
