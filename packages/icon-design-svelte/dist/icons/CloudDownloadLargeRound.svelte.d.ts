import { SvelteComponent } from 'svelte';

export interface CloudDownloadLargeRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudDownloadLargeRound extends SvelteComponent<CloudDownloadLargeRoundProps> {}
