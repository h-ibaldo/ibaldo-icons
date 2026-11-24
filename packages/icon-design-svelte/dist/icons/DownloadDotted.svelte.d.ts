import { SvelteComponent } from 'svelte';

export interface DownloadDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadDotted extends SvelteComponent<DownloadDottedProps> {}
