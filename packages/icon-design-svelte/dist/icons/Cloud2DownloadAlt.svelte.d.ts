import { SvelteComponent } from 'svelte';

export interface Cloud2DownloadAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud2DownloadAlt extends SvelteComponent<Cloud2DownloadAltProps> {}
