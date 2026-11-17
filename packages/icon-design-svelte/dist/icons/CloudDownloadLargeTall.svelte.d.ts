import { SvelteComponent } from 'svelte';

export interface CloudDownloadLargeTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudDownloadLargeTall extends SvelteComponent<CloudDownloadLargeTallProps> {}
