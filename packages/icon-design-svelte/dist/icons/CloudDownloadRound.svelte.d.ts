import { SvelteComponent } from 'svelte';

export interface CloudDownloadRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudDownloadRound extends SvelteComponent<CloudDownloadRoundProps> {}
