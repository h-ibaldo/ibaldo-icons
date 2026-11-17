import { SvelteComponent } from 'svelte';

export interface CloudMusicRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMusicRound extends SvelteComponent<CloudMusicRoundProps> {}
