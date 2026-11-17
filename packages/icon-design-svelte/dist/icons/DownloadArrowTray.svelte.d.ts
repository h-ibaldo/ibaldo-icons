import { SvelteComponent } from 'svelte';

export interface DownloadArrowTrayProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadArrowTray extends SvelteComponent<DownloadArrowTrayProps> {}
