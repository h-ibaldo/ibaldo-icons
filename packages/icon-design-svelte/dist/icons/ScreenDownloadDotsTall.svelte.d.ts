import { SvelteComponent } from 'svelte';

export interface ScreenDownloadDotsTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenDownloadDotsTall extends SvelteComponent<ScreenDownloadDotsTallProps> {}
