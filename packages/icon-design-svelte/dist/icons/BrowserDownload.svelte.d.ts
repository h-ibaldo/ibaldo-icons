import { SvelteComponent } from 'svelte';

export interface BrowserDownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserDownload extends SvelteComponent<BrowserDownloadProps> {}
