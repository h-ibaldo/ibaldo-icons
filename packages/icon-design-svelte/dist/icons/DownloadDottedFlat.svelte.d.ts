import { SvelteComponent } from 'svelte';

export interface DownloadDottedFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadDottedFlat extends SvelteComponent<DownloadDottedFlatProps> {}
