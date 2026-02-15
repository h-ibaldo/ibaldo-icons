import { SvelteComponent } from 'svelte';

export interface DownloadUpdatesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadUpdates extends SvelteComponent<DownloadUpdatesProps> {}
