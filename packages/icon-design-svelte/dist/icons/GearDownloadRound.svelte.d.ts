import { SvelteComponent } from 'svelte';

export interface GearDownloadRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearDownloadRound extends SvelteComponent<GearDownloadRoundProps> {}
