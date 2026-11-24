import { SvelteComponent } from 'svelte';

export interface CloudDownloadLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudDownloadLarge extends SvelteComponent<CloudDownloadLargeProps> {}
