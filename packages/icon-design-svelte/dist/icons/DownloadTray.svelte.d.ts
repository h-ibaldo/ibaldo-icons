import { SvelteComponent } from 'svelte';

export interface DownloadTrayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadTray extends SvelteComponent<DownloadTrayProps> {}
