import { SvelteComponent } from 'svelte';

export interface DownloadFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadFlat extends SvelteComponent<DownloadFlatProps> {}
