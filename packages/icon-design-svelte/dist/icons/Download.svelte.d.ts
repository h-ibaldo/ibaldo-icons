import { SvelteComponent } from 'svelte';

export interface DownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Download extends SvelteComponent<DownloadProps> {}
