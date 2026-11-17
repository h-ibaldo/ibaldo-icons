import { SvelteComponent } from 'svelte';

export interface ScreenDownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenDownload extends SvelteComponent<ScreenDownloadProps> {}
