import { SvelteComponent } from 'svelte';

export interface CloudDownloadTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudDownloadTall extends SvelteComponent<CloudDownloadTallProps> {}
