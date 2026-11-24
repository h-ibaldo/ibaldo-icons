import { SvelteComponent } from 'svelte';

export interface CloudMusicDoubleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMusicDoubleRound extends SvelteComponent<CloudMusicDoubleRoundProps> {}
