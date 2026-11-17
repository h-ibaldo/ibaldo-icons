import { SvelteComponent } from 'svelte';

export interface CloudSyncCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSyncCornerRound extends SvelteComponent<CloudSyncCornerRoundProps> {}
