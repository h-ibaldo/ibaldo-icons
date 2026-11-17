import { SvelteComponent } from 'svelte';

export interface DownloadArrowTrayAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DownloadArrowTrayAlt extends SvelteComponent<DownloadArrowTrayAltProps> {}
