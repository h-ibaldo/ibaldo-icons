import { SvelteComponent } from 'svelte';

export interface Cloud3DownloadAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3DownloadAlt extends SvelteComponent<Cloud3DownloadAltProps> {}
